from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    # function call auf Chat gpt
    return HttpResponse("hey")
