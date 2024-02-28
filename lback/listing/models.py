from django.db import models


class Supplier(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=22)
    email = models.CharField(max_length=22)

    def __str__(self):
        return "%s" % (self.name)


class Pic(models.Model):
    description = models.CharField(max_length=200)
    pic = models.ImageField(upload_to='uploads/')


class Offer(models.Model):
    title = models.CharField(max_length=200)
    pic = models.ForeignKey(Pic, on_delete=models.RESTRICT)

    unit = models.CharField(max_length=120)

    price_per_unit = models.FloatField()
    stock = models.PositiveIntegerField()

    header = models.CharField(max_length=350)

    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    highlights = models.TextField()
    including = models.TextField()
    excluding = models.TextField()
    faq = models.TextField()
    description = models.TextField()
    additional_info = models.TextField()

    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)

    # returned third party items
    location = models.URLField()
    meeting_point = models.URLField()
    drop_off_point = models.URLField()
    review = models.URLField()

    def __str__(self):
        return "%s(%s)" % (self.title.short, self.supplier.name)
