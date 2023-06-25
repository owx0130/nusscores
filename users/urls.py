from django.urls import path
from .views import *

urlpatterns = [
    path('register/', RegisterUser),
    path('login/', LoginUser),
    path('edit/', edit_item),
]
