from django.db import models


class Stage(models.Model):
    level = models.PositiveSmallIntegerField(default=0)
    time_amount = models.IntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"level: {self.level}, time_amount: {self.time_amount}"


class Question(models.Model):
    content = models.CharField(max_length=255)
    is_visible = models.BooleanField(default=True)
    count_of_seen = models.PositiveSmallIntegerField(default=1)
    last_seen_at = models.DateTimeField(null=True)
    next_show_at = models.DateTimeField(null=True)
    completed_at = models.DateTimeField(null=True)
    stage = models.ForeignKey(Stage, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"content: {self.content}, " \
               f"stage_id: {self.stage},  " \
               f"last_seen_at: {self.last_seen_at}, " \
               f"next_show_at: {self.next_show_at}"


class Answer(models.Model):
    content = models.TextField(blank=True, null=True)
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"content: {self.content}, question_id: {self.question}"
