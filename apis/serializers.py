from rest_framework import serializers

from apis.models import Question, Answer, Stage


class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = ('id', 'level', 'time_amount', 'next_stage')


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('id', 'content', 'created_at', 'update_at',)


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, required=False)

    def create(self, validated_data):
        answers_data = validated_data.pop('answers')
        stage_id = validated_data.pop('stage')
        question = Question.objects.create(**validated_data, stage=stage_id)
        for answer_data in answers_data:
            Answer.objects.create(question=question, **answer_data)
        return question

    class Meta:
        model = Question
        fields = '__all__'
