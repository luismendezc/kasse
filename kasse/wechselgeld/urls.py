from django.urls import path
from wechselgeld import views

app_name = 'wechselgeld'

urlpatterns = [
    path('', views.IndexView.as_view(), name="index"),
    path('munze', views.WechselGeld.as_view(), name="munze"),
]
