from django.contrib import admin
from .models import OfferInfo, OfferDetails, ThirdParty, Supplier

admin.site.register(OfferInfo)
admin.site.register(OfferDetails)
admin.site.register(ThirdParty)
admin.site.register(Supplier)
