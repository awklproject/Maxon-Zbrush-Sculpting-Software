from django.urls import include, path
from rest_framework import routers

from .views import OfferInfoSet, ListTp, ListSupp, OfferDetails

router = routers.DefaultRouter()
router.register(r'list', OfferInfoSet, basename='ListModel')

router.register(r'listdetails', OfferDetails, basename='ListdetailsModel')
router.register(r'listsuppliers', ListSupp, basename='ListsuppliersModel')
router.register(r'listthirdparties', ListTp, basename='ListtpModel')

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework'))
]

urlpatterns += router.urls
