from django.urls import include, path
from rest_framework import routers

from .views import OfferSet
router = routers.DefaultRouter()
router.register(r'list', OfferSet, basename='ListOffers')
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework'))
]

urlpatterns += router.urls
