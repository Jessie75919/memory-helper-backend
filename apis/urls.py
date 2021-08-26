from django.urls import path

from apis import views

urlpatterns = [
    path('questions', views.QuestionList.as_view()),
    path('questions/<int:pk>', views.QuestionDetail.as_view()),
    path('answers/<int:pk>', views.AnswerDetail.as_view()),
]