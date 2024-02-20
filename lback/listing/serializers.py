from .models import OfferInfo
from rest_framework import serializers

class OfferInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfferInfo
        fields = ['supplier_name', 'description', 'unit', 'stock', 'price_per_unit', 'location', 'review', 'pic']

    def get_pic(self, obj):
        return self.context['request'].build_absolute_uri(obj.pic.url)
