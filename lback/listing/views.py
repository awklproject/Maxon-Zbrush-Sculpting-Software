from django.shortcuts import render
from .models import OfferInfo
from .serializers import OfferInfoSerializer
from rest_framework import viewsets
from django.utils import timezone

class OfferInfoSet(viewsets.ModelViewSet):
    current_time = timezone.now()
    queryset = OfferInfo.objects.filter(start_time__lte=current_time, end_time__gte=current_time)
    serializer_class = OfferInfoSerializer
