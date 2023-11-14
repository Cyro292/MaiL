from django.shortcuts import render
from django.http import HttpResponse, Http404

# Create your views here.


def index(request):
    return HttpResponse("hey")


# openai acces point
def openai(request):
    import aicontrol.openai.gpt

    """
    Test the AI response.
    """

    if request.method == "POST":
        input_text = request.POST.get("input_text", None)

        response = aicontrol.openai.gpt.ai_response(input_text)
        return HttpResponse(response)

    response = aicontrol.openai.gpt.ai_response(
        "Give me a nice joke, my life is so hard"
    )
    return HttpResponse(response)
