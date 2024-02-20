from .models import OfferInfo
from rest_framework import serializers

class OfferInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OfferInfo
        fields = ['supplier_name', 'description', 'unit', 'stock', 'price_per_unit', 'location', 'review', 'pic']
