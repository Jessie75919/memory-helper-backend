from .models import Question, Stage, MAX_STAGE_LEVEL
from datetime import datetime, timedelta, time
from dateutil.relativedelta import relativedelta


def save_question(question, time_amount, stage=None):
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


class QuestionRepo:
    @staticmethod
    def search(mode, now, user):
        if mode is None:
            return Question.objects.filter(user=user)

        end = datetime.combine(now, time.max)
        if mode == 'today':
            begin = datetime.combine(now, time.min)
            print(begin, end)
            return Question.objects.filter(
                user=user,
                completed_at__isnull=True,
                next_show_at__range=(begin, end)
            )

        begin = None
        if mode == 'week':
            begin = now - timedelta(days=7)

        elif mode == 'month':
            begin = now - relativedelta(months=1)

        begin = datetime.combine(begin, time.min)
        return Question.objects.filter(
            user=user,
            completed_at__isnull=True,
            next_show_at__range=(begin, end)
        )

    @staticmethod
    def answer_question(question, choice):
        """ if word is marked as 'blurry', it should show next day """
        if choice == 'blurry':
            return save_question(question=question, time_amount=timedelta(days=1))

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

        return save_question(question=question, stage=_stage, time_amount=timedelta(hours=_stage.time_amount))
