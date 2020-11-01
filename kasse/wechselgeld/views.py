from django.shortcuts import render
from django.views.generic import View, TemplateView, ListView, DetailView
from django.http import HttpResponse
import csv
import random
import datetime


# Create your views here.
class IndexView(TemplateView):
    template_name = 'wechselgeld/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['injectme'] = 'BASIC INJECTION!'
        return context

class WechselGeld(TemplateView):
    template_name = 'wechselgeld/wechsel.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

def error_404_view(request, exception):
    return render(request, '404.html')
