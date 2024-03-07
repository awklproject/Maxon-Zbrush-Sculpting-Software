from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import UserSerializer


@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        return Response({'message': 'Login successful',
                         'username': user.username},
                        status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Invalid login credentials'},
                        status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def logout_user(request):
    logout(request)
    return Response({'message': 'Logout Successful'},
                    status=status.HTTP_200_OK)


@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({'username': user.username, 'email': user.email},
                        status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
