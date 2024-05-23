from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.IntegerField(null = False)
    first_name = models.CharField(max_length = 30, null = False)
    last_name = models.CharField(max_length = 30, null = False)
    email = models.CharField(max_length = 100, null = False)
    uni_email = models.CharField(max_length = 100)
    phone_number = models.IntegerField()
    password = models.CharField(('password'), max_length=128)

class Property(models.Model):
    prop_id = models.IntegerField(null = False)
    name = models.CharField(max_length = 100, null = False)
    street_01 = models.CharField(max_length = 30, null = False)
    street_02 = models.CharField(max_length = 30, null = False)
    zip_code = models.CharField(max_length = 7, null = False)
    province = models.CharField(max_length = 2, null = False)
    university = models.CharField(max_length = 50, null = False)
    prop_type = models.CharField(max_length = 20, null = False)
    rooms = models.IntegerField(null = False)
    bathrooms = models.IntegerField(null = False)
    price = models.IntegerField(null = False)
    duration = models.IntegerField(null = False)
    term = models.CharField(max_length = 10, null = False)
    #image = models.ImageField(upload_to='images')
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE, # Chekc what on_delete is ??
        )

class Cart(User):
    # Serial Number ??
    prop = models.ManyToManyField(Property)