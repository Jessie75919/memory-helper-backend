import factory
from faker import Factory
from . import models

faker = Factory.create()


class QuestionFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.Question

    content = faker.text()
    stage_id = faker.random_element(elements=(1, 2, 3, 4, 5, 6))


class AnswerFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = models.Answer

    question = factory.SubFactory(QuestionFactory)
    content = faker.text()
