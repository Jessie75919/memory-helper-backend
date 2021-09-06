from datetime import datetime

from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from .models import Question, Answer, Stage
from .serializers import QuestionSerializer, AnswerSerializer
from rest_framework.views import APIView
from .repos import QuestionRepo


class QuestionList(APIView):
    """
    List all questions, or create a new Question
    """

    def get(self, req, format=None):
        param = req.GET.get('q', None)
        questions = QuestionRepo.search(mode=param, now=datetime.now(), user=req.user)
        serializer = QuestionSerializer(questions.order_by('-created_at'), many=True)
        return Response(serializer.data)

    def post(self, req, format=None):
        serializer = QuestionSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save(user=req.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def get_object(pk, cls):
    try:
        return cls.objects.get(pk=pk)
    except cls.DoesNotExist:
        raise Http404


class QuestionAnswerUpdated(APIView):
    def put(self, req, pk):
        if req.data['choice'] not in ['blurry', 'easy', 'hard']:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        question = Question.objects.select_related('stage').get(pk=pk)
        QuestionRepo.answer_question(question, req.data['choice'])

        return Response(status=status.HTTP_200_OK)


class QuestionDetail(APIView):
    """get, update, delete specific question"""

    def put(self, req, pk):
        question = get_object(pk, Question)
        serializer = QuestionSerializer(question, data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, req, pk):
        question = get_object(pk, Question)
        serializer = QuestionSerializer(question)
        return Response(serializer.data)

    def delete(self, req, pk):
        question = get_object(pk, Question)
        question.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AnswerDetail(APIView):
    """get, update answer"""

    def get(self, req, pk):
        serializer = AnswerSerializer(get_object(pk, Answer))
        return Response(serializer.data)

    def put(self, req, pk):
        answer = get_object(pk, Answer)
        serializer = AnswerSerializer(answer, data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
