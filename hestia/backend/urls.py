from django.contrib import admin
from django.urls import path
from .views import index, logout_request, login_request, open_listings, open_sublet_form, about_us, login, dashboard

urlpatterns = [
    path(route='',view=index,name='index'),
    path(route='listings',view=open_listings,name='listings'),
    path(route='sublet',view=open_sublet_form,name='sublet'),
    path(route='aboutus',view=about_us,name='about'),
    path(route='signin',view=login,name='signin'),
    path(route='login_request',view=login_request,name='login_request'),
    path(route='logout',view=logout_request,name='logout'),
    path(route='dashboard',view=dashboard,name='dashboard'),
    path(route='register',view=login_request,name='login'),
]
