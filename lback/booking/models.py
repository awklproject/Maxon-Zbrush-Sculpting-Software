from django.db import models
from django.contrib.auth.models import User
from listing.models import Offer



class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    offer = models.ForeignKey(Offer, on_delete=models.RESTRICT)
    time = models.TimeField()
    username = models.CharField(max_length=100)
    user_email = models.EmailField()
    user_mobile = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    approved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username}'s booking on {self.date} at {self.time}"
