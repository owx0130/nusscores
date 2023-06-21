from django.urls import path
from .views import *

urlpatterns = [
  path('get/', get_data),
  path('post/', add_item),
  path('edit/', edit_item),
]