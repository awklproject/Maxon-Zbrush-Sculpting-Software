from django.urls import path
from .views import CustomTokenObtainPairView, CreateUserView

urlpatterns = [
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/register/', CreateUserView.as_view(), name='register'),


]
