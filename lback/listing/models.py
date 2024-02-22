from django.db import models


# info that will be showed on the card in the front page
class OfferInfo(models.Model):
    # outside card 
    title = models.CharField(max_length=200)
    unit = models.CharField(max_length=120)
    price_per_unit = models.IntegerField()
    stock = models.IntegerField()

    pic = models.ImageField(upload_to='uploads/')

    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

 
class OfferDetails(models.Model):
    # details to which offer
    offer_info = models.OneToOneField(OfferInfo, 
                                      on_delete=models.CASCADE,
                                      primary_key=True)
    highlights = models.TextField()
    including = models.TextField()
    excluding = models.TextField()
    faq = models.TextField()
    description = models.CharField()
    additional_info = models.TextField()


class Google(models.Model):
    location = models.URLField()
    meeting_point = models.URLField()
    drop_off_point = models.URLField()
    review = models.URLField()


class Supplier(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=22)
    email = models.CharField(max_length=22)


