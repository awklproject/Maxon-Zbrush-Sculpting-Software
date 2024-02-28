from .models import Offer
from .serializers import OfferSerializer
from rest_framework import viewsets
from django.utils import timezone


class OfferSet(viewsets.ModelViewSet):
    current_time = timezone.now()
    queryset = Offer.objects.filter(start_time__lte=current_time,
                                    end_time__gte=current_time)
    serializer_class = OfferSerializer
