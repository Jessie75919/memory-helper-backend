from .models import Question, Stage, MAX_STAGE_LEVEL
from datetime import datetime, timedelta, time
from dateutil.relativedelta import relativedelta


def update_question(question, time_amount, stage=None):
    if stage is not None:
        question.stage = stage

    now = datetime.now()
    question.last_seen_at = now
    question.next_show_at = now + time_amount
    question.count_of_seen = question.count_of_seen + 1
    question.save()
    return question


def mark_question_completed(question):
    question.completed_at = datetime.now()
    question.count_of_seen = question.count_of_seen + 1
    question.save()
    return question


def query_question(user, begin, end):
    return Question.objects.filter(
        user=user,
        completed_at__isnull=True,
        next_show_at__range=(begin, end)
    ).prefetch_related('answers')


class QuestionRepo:
    @staticmethod
    def search(mode, now, user):
        if mode is None:
            return Question.objects.filter(user=user) \
                .prefetch_related('answers')
        begin, end = None, None

        if mode == 'today':
            begin = datetime.combine(now, time.min)
            end = now
        elif mode == 'week':
            begin = datetime.combine(now - timedelta(days=7), time.min)
            end = datetime.combine(now, time.max)
        elif mode == 'month':
            begin = datetime.combine(now - relativedelta(months=1), time.min)
            end = datetime.combine(now, time.max)

        return query_question(user, begin, end)

    @staticmethod
    def answer_question(question, choice):
        """ if word is marked as 'blurry', it should show next day """
        if choice == 'blurry':
            return update_question(question=question, time_amount=timedelta(days=1))

        current_level = question.stage.level
        next_level = None

        if choice == 'easy':
            if current_level == MAX_STAGE_LEVEL:
                return mark_question_completed(question=question)
            else:
                next_level = min(current_level + 1, 6)
        elif choice == 'hard':
            next_level = max(current_level - 1, 1)

        _stage = Stage.objects.filter(level=next_level)[0]

        return update_question(question=question, stage=_stage, time_amount=timedelta(hours=_stage.time_amount))
