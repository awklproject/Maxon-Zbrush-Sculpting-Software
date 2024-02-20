from django.shortcuts import render
from .models import OfferInfo
from .serializers import OfferInfoSerializer
from rest_framework import viewsets

class OfferInfoSet(viewsets.ModelViewSet):
    queryset = OfferInfo.objects.all()
    serializer_class = OfferInfoSerializer


