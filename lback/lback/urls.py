from django.contrib import admin
from account.views import register_user, login_user, logout_user
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [

    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),

    path('logout/', logout_user, name='logout'),
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
