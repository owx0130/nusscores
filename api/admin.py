from django.contrib import admin
from .models import Bracket

class BracketAdmin(admin.ModelAdmin):
  list_display = ('id', 'hallname', 'name', 'matricnumber', 'players', 'sport', 'brackettype', 'created_at')

admin.site.register(Bracket, BracketAdmin)