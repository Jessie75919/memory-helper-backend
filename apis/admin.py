from django.contrib import admin

# Register your models here.
from apis.models import Question, Stage, Answer

admin.site.register(Question)
admin.site.register(Stage)
admin.site.register(Answer)
