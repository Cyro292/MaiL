from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    return HttpResponse("hey")


# openai acces point
def openai(request):
    import aicontrol.openai.gpt

    """
    Test the AI response.
    """
    input_text = "Your input text goes here"
    response = aicontrol.openai.gpt.ai_response(input_text)
    return HttpResponse(response)
