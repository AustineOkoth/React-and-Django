from .models import Post
from django.core.mail import send_mail
import asyncio

# Configuration for Signals and receiver
from django.db.models.signals import post_save
from django.dispatch import receiver

async def main():
    send_mail(
        '  Django Project',
        'A new Blog has been added to the Blogs',
        'austinaustine4@gmail.com',
        ['austinebizness@gmail.com'],
        fail_silently=False,
    )
    print("Email Has been sent")
    
    
@receiver(post_save, sender=Post)
def new_blog_added(sender, instance, **kwargs):
    asyncio.run(main())

