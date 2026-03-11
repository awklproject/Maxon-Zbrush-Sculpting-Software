class User(AbstractUser):
    is_customer = models.BooleanField(default=False)
    is_supplier = models.BooleanField(default=False)


class CustomerUser(User):
    preferred_item = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        self.is_customer = True
        super().save(*args, **kwargs)


class SupplierUser(User):
    address = models.CharField(max_length=200)
    business_name = models.CharField(max_length=200)
    bio = models.TextField(blank = True, help_text="Business description")

    def save(self, *args, **kwargs):
        self.is_supplier = True
        super().save(*args, **kwargs)

