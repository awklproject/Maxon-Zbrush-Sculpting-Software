from django.db import models

class OfferInfo(models.Model):
    supplier_name = models.CharField(max_length=100)
    description = models.TextField()
    unit = models.CharField(max_length=120)
    stock = models.IntegerField()
    price_per_unit =  models.IntegerField()

    # google based informations
    location = models.URLField()
    review = models.URLField()

    # descriptive image
    pic = models.ImageField(upload_to = 'uploads/')
