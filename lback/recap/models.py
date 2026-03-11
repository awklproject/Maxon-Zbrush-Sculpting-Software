from django.contrib.auth.models import AbstractUser
from django.db import models


# extending the user model but when we choose it as the default auth.user
# it just broke everything down
# this recap is gonna change this weekend
class User(AbstractUser):
    is_customer = models.BooleanField(default=False)
    is_supplier = models.BooleanField(default=False)

    # Specify unique related names for the groups and user_permissions
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get \
                all permissions granted to each of their groups.',
        related_name="user_set_recap",
        related_query_name="user",
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="user_set_recap",
        related_query_name="user",
    )


class CustomerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
                                related_name='customer_profile')


class SupplierProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
                                related_name='supplier_profile')


class Offer(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE,
                                   related_name='offers')

    def __str__(self):
        return self.title


