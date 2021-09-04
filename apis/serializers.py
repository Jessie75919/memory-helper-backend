import datetime

from rest_framework import serializers

from apis.models import Question, Answer, Stage


class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = ('id', 'level', 'time_amount', 'next_stage_level')


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('id', 'content', 'created_at', 'update_at',)


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, required=False)

    def create(self, validated_data):
        answers_data = validated_data.pop('answers')
        validated_data['last_seen_at'] = datetime.datetime.now()
        validated_data['next_show_at'] = datetime.datetime.now()
        question = Question.objects.create(**validated_data, stage_id=1)
        for answer_data in answers_data:
            Answer.objects.create(question=question, **answer_data)
        return question

    def update(self, instance, validated_data):
        instance.content = validated_data['content']
        instance.save()
        answers_data = validated_data.pop('answers')
        for answer_data in answers_data:
            ans = Answer.objects.filter(question_id=instance.id).update(**answer_data)
            print(ans)

        return instance


    class Meta:
        model = Question
        fields = '__all__'
