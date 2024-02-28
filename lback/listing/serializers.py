from .models import Offer, Supplier
from rest_framework import serializers


class OfferSerializer(serializers.ModelSerializer):
    supplier_name = serializers.SerializerMethodField()

    class Meta:
        model = Offer
        fields = '__all__'

    def get_supplier_name(self, obj):
        return obj.supplier.name

    def get_pic(self, obj):
        return self.context['request'].build_absolute_uri(obj.pic.url)


class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = ['name', 'address', 'phone', 'email']
