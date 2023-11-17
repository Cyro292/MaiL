from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

urlpatterns = [
    path("api/", include((router.urls, "aicontrol"), namespace="apirouter")),
    path("api/openai/", views.OpenAiView.as_view(), name="openai"),
]

urlpatterns += router.urls
