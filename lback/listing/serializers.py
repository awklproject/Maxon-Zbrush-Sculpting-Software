from .models import OfferInfo, ThirdParty, OfferDetails, Supplier
from rest_framework import serializers


class OfferInfoSerializer(serializers.ModelSerializer):
    supplier_name = serializers.SerializerMethodField()

    class Meta:
        model = OfferInfo
        fields = '__all__'

    def get_supplier_name(self, obj):
        return obj.supplier.name

    def get_pic(self, obj):
        return self.context['request'].build_absolute_uri(obj.pic.url)


class TpSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThirdParty
        fields = ['location', 'meeting_point', 'drop_off_point', 'review']


class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfferDetails
        fields = ['offer_info', 'highlights', 'including', 'excluding', 'faq',
                  'description', 'additional_info']


class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = ['name', 'address', 'phone', 'email']
