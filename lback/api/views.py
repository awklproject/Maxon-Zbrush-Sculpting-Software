from listing.models import Offer
from listing.serializers import OfferSerializer
from booking.serializers import BookingSerializerSupplier
from booking.models import Booking
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response


@permission_classes([IsAuthenticated])
@api_view(['POST'])
def bookingOffer(request, offer_id):
    serializer = BookingSerializerSupplier(data=request.data)

    if serializer.is_valid():
        offer_instance = Offer.objects.get(pk=offer_id)
        serializer.validated_data['offer'] = offer_instance
        serializer.validated_data['user'] = request.user
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getOffers(request):
    offers = Offer.objects.all()
    serializer = OfferSerializer(offers, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@permission_classes([IsAuthenticated])
@api_view(['GET'])
def getBooking(request):
    offers = Booking.objects.all()
    serializer = BookingSerializerSupplier(offers, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_offer_by_id(request, offer_id):
    try:
        offer = Offer.objects.get(pk=offer_id)
    except Offer.DoesNotExist:
        return Response({'error': 'Offer not found'},
                        status=status.HTTP_404_NOT_FOUND)

    serializer = OfferSerializer(offer)
    return Response(serializer.data)
