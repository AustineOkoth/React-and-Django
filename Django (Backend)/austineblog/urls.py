from django.urls import path, include
from . import views
from austineblog.views import  post_list
from rest_framework.routers import DefaultRouter

app_name="austine_blog"

router = DefaultRouter()
router.register(r'post', views.BlogPostViewSet, basename='BlogPostViewSet')


urlpatterns = [
    path('', include(router.urls))
    # path('post', views.post_list, name = "post_list"),     
    # path("posts/", myposts, name="mynote"),
    # path("posts/<int:pk>/", postDetail, name="postDetails"),
    
    
    
    #path('', views.post_list, name='post_list'),
    #path('post', views.post_list, name='post_list'),
    # path('post/<int:pk>/', views.post_detail, name='post_detail'),
    # path('post/new/', views.post_new, name='post_new'),
    # path('post/<int:pk>/edit/', views.post_edit, name='post_edit'),
    
    
]