from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

@api_view(['POST'])
def RegisterUser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        User.objects.create_user(serializer.data['username'], serializer.data['email'], serializer.data['password'])
        return Response(None, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def LoginUser(request):
    user = authenticate(username=request.data['username'], password=request.data['password'])
    if user is not None:
        return Response(None, status=status.HTTP_201_CREATED)

    return Response(None, status=status.HTTP_400_BAD_REQUEST)