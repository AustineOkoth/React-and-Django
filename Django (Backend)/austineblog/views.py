from django.shortcuts import render, get_object_or_404
from .models import Post
from django.utils import timezone
# from .forms import PostForm
from django.shortcuts import redirect

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, viewsets
from .serializers import NoteSerializer
from rest_framework.permissions import AllowAny




@api_view(["GET"])
def post_list(request):
    posts = Post.objects.all()
    serializer = NoteSerializer(posts, many=True)
    return Response(serializer.data)

class BlogPostViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    def get_queryset(self):
        return Post.objects.all()
    
    def get_serializer_class(self):
        return NoteSerializer














#Post.objects.get(pk=pk)


# @api_view(['GET', 'POST'])
# def post_list(request):

#     if request.method == 'GET':
#         posts = Post.objects.all()
#         serializer = NoteSerializer(posts, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = NoteSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['DELETE'])
# def postDetail(request, pk):
#     try:
#         post = Post.objects.get(pk=pk)
#     except Post.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'DELETE':
#         post.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

# def post_list(request):
#     posts = Post.objects.filter(
#         published_date__lte=timezone.now()).order_by('published_date')
#     return render(request, 'austineblog/post_list.html', {'posts': posts})


# def post_detail(request, pk):
#     post = get_object_or_404(Post, pk=pk)
#     return render(request, 'austineblog/post_detail.html', {'post': post})


# def post_new(request):
#     if request.method == "POST":
#         form = PostForm(request.POST)
#         if form.is_valid():
#             post = form.save(commit=False)
#             post.author = request.user
#             post.published_date = timezone.now()
#             post.save()
#             return redirect('post_detail', pk=post.pk)
#     else:
#         form = PostForm()
#     return render(request, 'austineblog/post_edit.html', {'form': form})


# def post_edit(request, pk):
#     post = get_object_or_404(Post, pk=pk)
#     if request.method == "POST":
#         form = PostForm(request.POST, instance=post)
#         if form.is_valid():
#             post = form.save(commit=False)
#             post.author = request.user
#             post.published_date = timezone.now()
#             post.save()
#             return redirect('post_detail', pk=post.pk)
#     else:
#         form = PostForm(instance=post)
#     return render(request, 'austineblog/post_edit.html', {'form': form})
