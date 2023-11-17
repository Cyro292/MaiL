from django.shortcuts import render
from django.http import HttpResponse, Http404
from rest_framework import views
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
import aicontrol.openai.gpt

# Create your views here.


class OpenAiView(views.APIView):
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        response = aicontrol.openai.gpt.ai_response(
            "Give me a nice joke, my life is so hard"
        )
        return Response(response)

    def post(self, request, format=None):
        input_text = request.data.get("input_text", None)

        if input_text is None:
            return Response({"error": "input_text not provided"}, status=400)

        response = aicontrol.openai.gpt.ai_response(input_text)
        return Response(response)
