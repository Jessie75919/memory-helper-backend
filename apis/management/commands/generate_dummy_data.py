import random

from django.core.management.base import BaseCommand, CommandError
from django_seed import Seed
from apis.models import Question, Stage, Answer


class Command(BaseCommand):
    help = 'To Generate dummy data'

    def add_arguments(self, parser):
        parser.add_argument('count', nargs='+', type=int)

    def handle(self, *args, **options):
        count = options['count'][0]
        seeder = Seed.seeder()
        seeder.add_entity(Question, count, {
            'content': lambda _: seeder.faker.text(),
            'stage': lambda _: Stage.objects.get(pk=random.randint(1, 6)),
            'next_show_at': lambda _: seeder.faker.date_between(start_date='-30d', end_date='+30d'),
            'last_seen_at': lambda _: seeder.faker.date_between(start_date='-30d', end_date='today'),
            'completed_at': lambda _: None
        })

        seeder.add_entity(Answer, count, {
            'content': lambda _: seeder.faker.text(),
        })

        seeder.execute()

        self.stdout.write(self.style.SUCCESS('Count Num is "%s"' % options['count']))
