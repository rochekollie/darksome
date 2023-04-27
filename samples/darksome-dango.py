from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    context = {'title': 'My Django App'}
    return render(request, 'index.html', context)
