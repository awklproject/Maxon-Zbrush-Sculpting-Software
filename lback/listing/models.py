from django.db import models


class OfferInfo(models.Model):
    # supplier model :
    # supplier info
    supplier_name = models.CharField(max_length=100)
    supplier_address = models.CharField(max_length=100)
    supplier_phone = models.CharField(max_length=100)

    # offers model:
    highlights = models.TextField()
    description = models.TextField()
    additional_info = models.TextField()
    including = models.TextField()
    excluding = models.TextField()

    faq = models.TextField()
    unit = models.CharField(max_length=120)
    stock = models.IntegerField()
    price_per_unit = models.IntegerField()

    # google based informations
    # TODO : there must be some checks to make sure the links are correct
    location = models.URLField()
    meeting_point = models.URLField()
    drop_off_point = models.URLField()
    review = models.URLField()

    pic = models.ImageField(upload_to='uploads/')
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
