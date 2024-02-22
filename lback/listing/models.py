from django.db import models


# info that will be showed on the card in the front page
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

    location = models.URLField()
    meeting_point = models.URLField()
    drop_off_point = models.URLField()
    review = models.URLField()

    pic = models.ImageField(upload_to='uploads/')

    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

 
class OfferDetails(models.Model):
    including = models.TextField()
    excluding = models.TextField()
    faq = models.TextField()
    description = models.CharField()
    additional_info = models.TextField()


# TODO: should this be required ?
class Google(models.Model):
    location = model.URLField()
    meeting_point = models.URLField()
    drop_off_point = models.URLField()
    review = models.URLField()


# supplier name / the supplier model
class Supplier(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=22)
    email = models.CharField(max_length=22)


# back offer model
## this is related to the inside of the offer model

# google based informations
