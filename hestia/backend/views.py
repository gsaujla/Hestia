from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from .models import User
import logging
# Create your views here.

logger = logging.getLogger(__name__)


def index(request):
    return render(request,'backend/landing.html')

def open_listings(request):
    return render(request,'backend/listings.html')

def open_sublet_form(request):
    return render(request,'backend/list.html')

def about_us(request):
    return render(request,'backend/about.html')

def login(request):
    return render(request,'backend/signin.html')

def dashboard(request):
    return render(request,'backend/dashboard.html')

def sign_up(request):
    return render(request,'backend/signup.html')



#Account Creation

def registration_request(request):
    context={}
    if request.method == 'GET':
        return redirect('backend:index')
    
    elif request.method == 'POST':
        #getting name and pw from the form
        username = request.POST['username']
        password = request.POST['pws']
        first_name = request.POST['firstname']
        last_name = request.POST['lastname']
        email = request.POST['email']
        uni_email = request.POST['uniemail']
        phone_number = request.POST['phonenumber']
        already_user = False
        try:
            User.objects.get(email=email)
            already_user = True
        except:
             # If not, simply log this is a new user
            logger.debug("{} is new user".format(username)) 

        if not already_user:
            #Creating and inserting a user object
            user = User.objects.create_user(username=username,password=password,first_name=first_name,last_name=last_name,email=email,uni_email=uni_email,phone_number=phone_number)
            login(request,user)
            return redirect('backend:index')
        else:
            return redirect('backend:login',context)
    


#Login
def login_request(request):
    context = {}
    # Handles POST request
    if request.method == "POST":
        # Get username and password from request.POST dictionary
        username = request.POST['username']
        password = request.POST['psw']
        # Try to check if provide credential can be authenticated
        user = authenticate(username=username, password=password)
        if user is not None:
            # If user is valid, call login method to login current user
            login(request, user)
            return redirect('backend:popular_course_list')
        else:
            # If not, return to login page again
            return render(request, 'backend/login.html', context)
    else:
        return render(request, 'backend/login.html', context)

#Logut
def logout_request(request):
    logout(request)
    return redirect("backend:index")


#Property Creation:

"""
def property_create(request):
    context={}
    if request.method == 'GET':
        return redirect('backend:sublet')
    
    elif request.method == 'POST':
        #getting name and pw from the form
        
        try:
            User.objects.get(email=email)
            already_user = True
        except:
             # If not, simply log this is a new user
            logger.debug("{} is new user".format(username)) 

        if not already_user:
            #Creating and inserting a user object
            user = User.objects.create_user(username=username,password=password,first_name=first_name,last_name=last_name,email=email,uni_email=uni_email,phone_number=phone_number)
            login(request,user)
            return redirect('backend:index')
        else:
            return redirect('backend:login',context)
"""