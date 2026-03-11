from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model
from .models import Offer, CustomerProfile

User = get_user_model()


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['id', 'title', 'description', 'price',
                  'available', 'created_by']


class UserSerializer(serializers.ModelSerializer):
    is_customer = serializers.SerializerMethodField()
    is_supplier = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name',
                  'is_customer', 'is_supplier')

    def get_is_customer(self, obj):
        return hasattr(obj, 'customerprofile')

    def get_is_supplier(self, obj):
        return hasattr(obj, 'supplierprofile')


class CustomerProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    class Meta:
        model = CustomerProfile
        fields = ('user',)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['is_customer'] = hasattr(user, 'customerprofile')
        token['is_supplier'] = hasattr(user, 'supplierprofile')
        return token
