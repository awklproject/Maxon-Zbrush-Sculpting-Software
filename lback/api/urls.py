from django.urls import path
from rest_framework import routers
from . import views

urlpatterns = [
        path('getofferbyid/<int:offer_id>/',
             views.getOfferByID,
             name='get_offer_by_ID'),
        path('list/', views.getOffers, name='list all offers'),
        path('bookings/', views.getBooking, name='bookings'),
        path('booking/<int:offer_id>/', views.bookingOffer, name='booking')
    ]

# some apis to add
# /listsupplieroffer
# /suppliereditsoffer
# show user booking history
# show supplier booking history
# User : see offer , book offers, redeem offers(by qr code)
# Supplier: edit offer, accept offer
