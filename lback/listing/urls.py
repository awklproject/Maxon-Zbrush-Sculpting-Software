from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'list', views.OfferSet, basename='ListOffers')
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework')),
    path('getofferbyid/<int:offer_id>/', views.getOfferByID,
         name='get_offer_by_ID')
]

urlpatterns += router.urls
