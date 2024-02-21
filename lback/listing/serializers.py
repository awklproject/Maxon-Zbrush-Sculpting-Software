from .models import OfferInfo
from rest_framework import serializers

class OfferInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfferInfo
        fields = ['supplier_name', 
                  'description', 'unit', 
                  'stock', 'price_per_unit', 
                  'location', 'review', 'pic',
                  'supplier_address','supplier_phone',
                  'highlights', 'including', 'excluding',
                  'faq', 'meeting_point', 'drop_off_point',
                  'start_time', 'end_time']

    def get_pic(self, obj):
        return self.context['request'].build_absolute_uri(obj.pic.url)
