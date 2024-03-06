from .models import Booking
from rest_framework import serializers


class BookingSerializerSupplier(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['user', 'offer', 'date', 'time', 'username', 'user_email',
                  'user_mobile']

