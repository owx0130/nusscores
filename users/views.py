from api.serializers import BracketSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import UserSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User


from .serializers import *
from .models import Bracket


@api_view(['GET'])
def get_data(request):
    data = Bracket.objects.all()
    serializer = BracketSerializer(data, many=True)
    return Response(serializer.data)


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


@api_view(['PUT'])
def edit_item(request):
    try:
        instance = Bracket.objects.get(id=request.data["id"])
    except Bracket.DoesNotExist:
        return Response({"error": "Bracket not found."}, status=status.HTTP_404_NOT_FOUND)

    serializer = BracketSerializer(instance, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
