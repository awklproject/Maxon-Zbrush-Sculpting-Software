from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
        TokenObtainPairView,
        TokenRefreshView
        )

urlpatterns = [
        path('user_type/', views.getUserType, name='get user type'),
        path('token/', TokenObtainPairView.as_view(), name="token_obtain_pair"),
        path('refresh/', TokenRefreshView.as_view(), name="token_refresh"),
        path('getofferbyid/<int:offer_id>/',
             views.get_offer_by_id,
             name='get_offer_by_ID'),
        path('list/', views.getOffers, name='list all offers'),
        path('bookings/', views.getBooking, name='bookings'),
        path('booking/<int:offer_id>/', views.bookingOffer, name='booking')
    ]

# /listsupplieroffer
# /suppliereditsoffer
# show supplier booking history
# User : see offer , book offers,
# supplier- or maybe anyone redeem offers(by qr code)
# Supplier: edit offer, accept offer
