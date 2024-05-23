from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,'backend/index.html')

def open_listings(request):
    return render(request,'backend/listings.html')

def open_sublet_form(request):
    return render(request,'backend/sublet_form.html')

def about_us(request):
    return render(request,'backend/about_us.html')

def login(request):
    return render(request,'backend/login.html')

def dashboard(request):
    return render(request,'backend/dashboard.html')

def sign_in(request):
    return render(request,'backend/sign_in.html')

