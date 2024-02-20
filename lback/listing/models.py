from django.db import models

class OfferInfo(models.Model):
    supplier_name = models.CharField(max_length=100)
    description = models.TextField()
    unit = models.CharField(max_length=120)
    stock = models.IntegerField()
    price_per_unit =  models.IntegerField()

    # google based informations
    # TODO : there must be some checks to make sure the links are correct
    location = models.URLField()
    meeting_point = models.URLField()
    drop_off_point = models.URLField()
    review = models.URLField()

    # descriptive image
    pic = models.ImageField(upload_to = 'uploads/')
