from django.db import models


class Stage(models.Model):
    level = models.PositiveSmallIntegerField(default=0)
    next_stage = models.ForeignKey('Stage', on_delete=models.SET_NULL, null=True)
    time_amount = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"level: {self.level}, time_amount: {self.time_amount}"


class Question(models.Model):
    content = models.CharField(max_length=255)
    is_visible = models.BooleanField(default=True)
    count_of_seen = models.PositiveSmallIntegerField(default=1)
    last_seen_at = models.DateTimeField(auto_now=True)
    completed_at = models.DateTimeField(null=True)
    stage = models.ForeignKey(Stage, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"content: {self.content}, stage_id: {self.stage}"


class Answer(models.Model):
    content = models.TextField()
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"content: {self.content}, question_id: {self.question}"
