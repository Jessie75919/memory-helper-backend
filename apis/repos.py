from .models import Question, Stage
from datetime import datetime, timedelta, time
from dateutil.relativedelta import relativedelta


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
        if choice == 'blurry':
            return question

        current_level = question.stage.level
        _stage = None
        next_level = None

        if choice == 'easy':
            next_level = min(current_level + 1, 6)
        elif choice == 'hard':
            next_level = max(current_level - 1, 1)

        _stage = Stage.objects.filter(level=next_level)[0]
        question.stage = _stage
        now = datetime.now()
        question.last_seen_at = now
        question.next_show_at = now + timedelta(hours=_stage.time_amount)
        question.count_of_seen = question.count_of_seen + 1
        question.save()