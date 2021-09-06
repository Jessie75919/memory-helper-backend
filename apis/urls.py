from django.urls import path

from apis import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('questions', views.QuestionList.as_view()),
    path('questions/<int:pk>', views.QuestionDetail.as_view()),
    path('answer-question/<int:pk>', views.QuestionAnswerUpdated.as_view()),
    path('answers/<int:pk>', views.AnswerDetail.as_view()),
]