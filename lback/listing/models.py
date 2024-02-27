from django.db import models


class Supplier(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=22)
    email = models.CharField(max_length=22)

    def __str__(self):
        return "%s" % (self.name)


class ThirdParty(models.Model):
    location = models.URLField()
    meeting_point = models.URLField()
    drop_off_point = models.URLField()
    review = models.URLField()


class OfferInfo(models.Model):
    title = models.CharField(max_length=200)
    unit = models.CharField(max_length=120)
    price_per_unit = models.IntegerField()
    stock = models.IntegerField()

    header = models.CharField(max_length=350)
    pic = models.ImageField(upload_to='uploads/')
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    third_party = models.ForeignKey(ThirdParty, on_delete=models.CASCADE)

    def __str__(self):
        return "%s(%s)" % (self.title, self.supplier.name)


class OfferDetails(models.Model):
    offer_info = models.OneToOneField(OfferInfo,
                                      on_delete=models.CASCADE,
                                      primary_key=True)
    highlights = models.TextField()
    including = models.TextField()
    excluding = models.TextField()
    faq = models.TextField()
    description = models.TextField()
    additional_info = models.TextField()

    def __str__(self):
        return "%s" % (self.offer_info.title)
