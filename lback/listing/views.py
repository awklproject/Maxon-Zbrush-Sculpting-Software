from .models import Offer
from .serializers import OfferSerializer
from django.utils import timezone
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response


@api_view(['GET'])
def getOfferByID(request, offer_id):
    try:
        offer = Offer.objects.get(pk=offer_id)
        serializer = OfferSerializer
        return Response(serializer.data, status=status.HTTP_200_OK)

    except offer.DoesNotExist:
        return Response({'error': 'offer not found'}, status=status.HTTP_404_NOT_FOUND)


class OfferSet(viewsets.ModelViewSet):
    current_time = timezone.now()
    queryset = Offer.objects.filter(start_time__lte=current_time,
                                    end_time__gte=current_time)
    serializer_class = OfferSerializer
