from django.contrib.auth.models import AbstractUser
from django.db import models

# NOTE: since admin models require this , this should be migrated first
# create the user types 


class User(AbstractUser):
    is_customer = models.BooleanField(default=False)
    is_supplier = models.BooleanField(default=False)


# add more fields when needed - what info do we need from users
class CustomerUser(User):
    preferred_item = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        self.is_customer = True
        super().save(*args, **kwargs)

# add more fields when needed - what info do we need from supplier
class SupplierUser(User):
    address = models.CharField(max_length=200)
    business_name = models.CharField(max_length=200)
    bio = models.TextField(blank = True, help_text="Business description")

    def save(self, *args, **kwargs):
        self.is_supplier = True
        super().save(*args, **kwargs)


# supplier creates Offer
class Offer(models.Model):
    supplier modles.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    main_pic = models.ImageField(upload_to='uploads/')

    # unit : what are you selling
    unit = models.CharField(max_length=120)
    price_per_unit = models.FloatField()
    # stock : number of units
    stock = models.PositiveIntegerField()

    # somthing similar to tags
    category = models.ManyToManyField(Category)
    header = models.CharField(max_length=350)

    # the offer will be available from start_time till end_time
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    # TODO: find a better way to do such things
    disable_weekends = models.BooleanField(default=False)
    disable_weekdays = models.BooleanField(default=False)

    available_booking_months = models.PositiveIntegerField(default=1)

    max_bookings_per_time = models.PositiveIntegerField()

    # highlights is for the outer page
    highlights = models.TextField()
    including_excluding = models.TextField()
    # TODO: create another model for this : ask questions : answer
    faq = models.TextField()

    description = models.TextField()
    additional_info = models.TextField()
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)

    # returned third party items
    # these are urls and probabley <iframe> tags
    location = models.CharField(max_length=600)
    meeting_point = models.CharField(max_length=600)
    drop_off_point = models.CharField(max_length=600)
    review = models.URLField()

    def __str__(self):
        return "%s(%s)" % (self.title, self.supplier.name)

# the customer / user books an offer
# what about creating packages ? => for now handle on frontend
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    offer = models.ForeignKey(Offer, on_delete=models.RESTRICT)
    when = models.DateTimeField()

    created_at = models.DateTimeField(auto_now_add=True)
    # why should this be updated
    updated_at = models.DateTimeField(auto_now=True)

    redeemed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username}'s booking on {self.when}"


