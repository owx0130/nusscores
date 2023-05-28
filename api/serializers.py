from rest_framework import serializers
from .models import Bracket

class BracketSerializer(serializers.ModelSerializer):
  class Meta:
    model = Bracket
    fields = ('id', 'hallname', 'name', 'matricnumber', 'players', 'sport', 'brackettype', 'created_at')