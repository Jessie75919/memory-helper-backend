import csv
import datetime
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError
from apis.models import Question, Answer


class Word:
    def __init__(self, data):
        self.data = data

    @property
    def type(self):
        return self.data[1]

    @property
    def key(self):
        return self.data[4]

    @property
    def val(self):
        content = [
            self.data[8].replace(' ', ' / '),
            "\n",
            self.data[2]
        ]
        return "\n".join(content)

    @property
    def format_savable_data(self):
        return {
            "question": {
                "content": self.key,
                'last_seen_at': datetime.datetime.now(),
                'next_show_at': datetime.datetime.now(),
                'user_id': 1,
            },
            "answer": {
                "content": self.val
            }
        }

    def save_word(self):
        data = self.format_savable_data
        question = Question.objects.create(**data['question'], stage_id=1)
        Answer.objects.create(question=question, **data['answer'])
        return question


class Command(BaseCommand):
    help = 'import words'

    def handle(self, *args, **options):
        folder = Path(__file__).resolve().parent

        with open(f'{folder}/import/words.csv') as csvfile:
            data = csv.reader(csvfile, delimiter='\t',)

            for idx, item in enumerate(data):
                w = Word(item)
                if w.type != 'Word':
                    continue

                w.save_word()
                self.stdout.write(self.style.SUCCESS(f"{w.key} saved !"))





