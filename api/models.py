from django.db import models

class Bracket(models.Model):
  hallname = models.CharField(max_length=50, default='')
  name = models.CharField(max_length=50, default='')
  matricnumber = models.CharField(max_length=10, default='', unique=True)
  players = models.CharField(max_length=10, default='')
  sport = models.CharField(max_length=20, default='')
  brackettype = models.CharField(max_length=50, default='')
  created_at = models.DateTimeField(auto_now_add=True)