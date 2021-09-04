import datetime

from django.test import TestCase
from .repos import QuestionRepo
from .factories import QuestionFactory


class QuestionModelTests(TestCase):
    def test_should_select_question_by_today(self):
        now = datetime.datetime(2021, 9, 1, tzinfo=datetime.timezone.utc)
        d1 = datetime.datetime(2021, 9, 12, tzinfo=datetime.timezone.utc)
        d2 = datetime.datetime(2021, 8, 11, tzinfo=datetime.timezone.utc)
        d3 = datetime.datetime(2021, 9, 1, tzinfo=datetime.timezone.utc)

        QuestionFactory(next_show_at=d1)
        QuestionFactory(next_show_at=d2)
        QuestionFactory(next_show_at=d3)
        actual = QuestionRepo.search('today', now)
        self.assertEqual(len(actual), 2)

    def test_should_select_question_by_week(self):
        now = datetime.datetime(2021, 9, 1, tzinfo=datetime.timezone.utc)
        d1 = datetime.datetime(2021, 9, 12, tzinfo=datetime.timezone.utc)
        d2 = datetime.datetime(2021, 8, 11, tzinfo=datetime.timezone.utc)

        d3 = datetime.datetime(2021, 8, 28, tzinfo=datetime.timezone.utc)
        d4 = datetime.datetime(2021, 8, 31, tzinfo=datetime.timezone.utc)
        d5 = datetime.datetime(2021, 9, 1, tzinfo=datetime.timezone.utc)

        QuestionFactory(next_show_at=d1)
        QuestionFactory(next_show_at=d2)
        QuestionFactory(next_show_at=d3)
        QuestionFactory(next_show_at=d4)
        QuestionFactory(next_show_at=d5)
        actual = QuestionRepo.search('week', now)
        self.assertEqual(len(actual), 3)

    def test_should_select_question_by_month(self):
        now = datetime.datetime(2021, 9, 1, tzinfo=datetime.timezone.utc)
        d1 = datetime.datetime(2021, 9, 12, tzinfo=datetime.timezone.utc)
        d2 = datetime.datetime(2021, 7, 11, tzinfo=datetime.timezone.utc)

        d3 = datetime.datetime(2021, 8, 28, tzinfo=datetime.timezone.utc)
        d4 = datetime.datetime(2021, 8, 31, tzinfo=datetime.timezone.utc)
        d5 = datetime.datetime(2021, 9, 1, tzinfo=datetime.timezone.utc)
        d6 = datetime.datetime(2021, 8, 3, tzinfo=datetime.timezone.utc)

        QuestionFactory(next_show_at=d1)
        QuestionFactory(next_show_at=d2)
        QuestionFactory(next_show_at=d3)
        QuestionFactory(next_show_at=d4)
        QuestionFactory(next_show_at=d5)
        QuestionFactory(next_show_at=d6)

        actual = QuestionRepo.search('month', now)
        self.assertEqual(len(actual), 4)
