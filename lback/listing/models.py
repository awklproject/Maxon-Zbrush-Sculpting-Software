from django.contrib.auth.models import User, AbstractUser
from django.db import models

BOOKING_PERIOD = (
    ("5", "5M"),
    ("10", "10M"),
    ("15", "15M"),
    ("20", "20M"),
    ("25", "25M"),
    ("30", "30M"),
    ("35", "35M"),
    ("40", "40M"),
    ("45", "45M"),
    ("60", "1H"),
    ("75", "1H 15M"),
    ("90", "1H 30M"),
    ("105", "1H 45M"),
    ("120", "2H"),
    ("150", "2H 30M"),
    ("180", "3H"),
    ("210", "3H 30M"),
    ("240", "4H"),
    ("270", "4H 30M"),
    ("300", "5H"),
    ("360", "6H"),
    ("420", "7H"),
    ("480", "8H"),
    ("540", "9H"),
    ("600", "10H"),
    ("660", "11H"),
    ("720", "12H"),
    ("840", "14H"),
    ("960", "16H"),
    ("1080", "18H"),
    ("1440", "1D"),
)


# possible : picture and background , website, business license ,
class Supplier(models.Model):
    account = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=22)
    business_name = models.CharField(max_length=100, blank=True)
    bio = models.TextField(blank=True, help_text="Business description")

    def __str__(self):
        return "%s" % (self.name)


class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self):
        return str(self.name)


class Pic(models.Model):
    description = models.CharField(max_length=200)
    pic = models.ImageField(upload_to='uploads/')


class Offer(models.Model):
    title = models.CharField(max_length=200)
    main_pic = models.ImageField(upload_to='uploads/')

    # TODO: make it multiple images for the same offer
    # probably save by reference
    pic = models.ForeignKey(Pic, on_delete=models.RESTRICT, )

    unit = models.CharField(max_length=120)

    price_per_unit = models.FloatField()
    stock = models.PositiveIntegerField()

    category = models.ManyToManyField(Category)

    header = models.CharField(max_length=350)

    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    disable_weekends = models.BooleanField(default=False)
    disable_weekdays = models.BooleanField(default=False)

    available_booking_months = models.PositiveIntegerField(default=1)
    max_bookings_per_time = models.PositiveIntegerField()
    period_of_each_booking = models.CharField(max_length=5,
                                              choices=BOOKING_PERIOD,
                                              help_text="how much does each booking take")

    highlights = models.TextField()
    including = models.TextField()
    excluding = models.TextField()
    faq = models.TextField()
    description = models.TextField()
    additional_info = models.TextField()
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)

    # returned third party items
    location = models.CharField(max_length=600)
    meeting_point = models.CharField(max_length=600)
    drop_off_point = models.CharField(max_length=600)
    review = models.URLField()

    def __str__(self):
        return "%s(%s)" % (self.title, self.supplier.name)
