from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import *
from .models import Bracket

@api_view(['GET'])
def get_data(request):
  data = Bracket.objects.all()
  serializer = BracketSerializer(data, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def add_item(request):
  serializer = BracketSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def edit_item(request):
  serializer = BracketSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)
  
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)