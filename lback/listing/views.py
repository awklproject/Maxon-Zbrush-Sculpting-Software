from .models import OfferInfo, ThirdParty, OfferDetails, Supplier
from .serializers import OfferInfoSerializer, TpSerializer, SupplierSerializer, DetailsSerializer
from rest_framework import viewsets
from django.utils import timezone


class OfferInfoSet(viewsets.ModelViewSet):
    current_time = timezone.now()
    queryset = OfferInfo.objects.filter(start_time__lte=current_time,
                                        end_time__gte=current_time)
    serializer_class = OfferInfoSerializer


# for testing Delete
class ListTp(viewsets.ModelViewSet):
    queryset = ThirdParty.objects.all()

    serializer_class = TpSerializer


class ListSupp(viewsets.ModelViewSet):
    queryset = Supplier.objects.all()

    serializer_class = SupplierSerializer


class OfferDetails(viewsets.ModelViewSet):
    queryset = OfferDetails.objects.all()
    serializer_class = DetailsSerializer
