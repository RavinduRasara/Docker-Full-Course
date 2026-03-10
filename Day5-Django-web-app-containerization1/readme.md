
# clone the project

[git clone https://github.com/RavinduRasara/Docker-Full-Course.git](https://github.com/RavinduRasara/Docker-Full-Course.git)

# Docker file

```bash
FROM ubuntu

WORKDIR /app

COPY requirements.txt /app
COPY devops /app

RUN apt-get update && \ 
    apt-get install -y python3 python3-pip && \
    pip install --break-system-packages -r requirements.txt

ENTRYPOINT ["python3"]
CMD ["manage.py", "runserver", "0.0.0.0:8000"]


```

&nbsp;

~/Desktop/Docker-Full-Course\$ `cd Day5-Django-web-app-containerization1`

~/Day5-Django-web-app-containerization1\$ <span style="color: rgb(224, 62, 45);">`docker build -t django-app-test1 .`</span>

<span style="color: rgb(53, 152, 219);">\[+\] Building 268.4s (8/9) docker:desktop-linux</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load build definition from Dockerfile 0.1s</span>  
 <span style="color: rgb(53, 152, 219);">\=> => transferring dockerfile: 318B 0.0s</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load metadata for docker.io/library/ubuntu:latest 4.1s</span>  
   
<span style="color: rgb(53, 152, 219);">\[+\] Building 268.6s (8/9) docker:desktop-linux</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load build definition from Dockerfile 0.1s</span>  
 <span style="color: rgb(53, 152, 219);">\=> => transferring dockerfile: 318B 0.0s</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load metadata for docker.io/library/ubuntu:latest 4.1s</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load .dockerignore 0.0s</span>  
<br/><span style="color: rgb(53, 152, 219);">\[+\] Building 268.7s (8/9) docker:desktop-linux</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load build definition from Dockerfile 0.1s</span>  
 <span style="color: rgb(53, 152, 219);">\=> => transferring dockerfile: 318B 0.0s</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load metadata for docker.io/library/ubuntu:latest 4.1s</span>  
   
<span style="color: rgb(53, 152, 219);">\[+\] Building 268.9s (8/9) docker:desktop-linux</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load build definition from Dockerfile 0.1s</span>  
 <span style="color: rgb(53, 152, 219);">\=> => transferring dockerfile: 318B 0.0s</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load metadata for docker.io/library/ubuntu:latest 4.1s</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load .dockerignore 0.0s</span>  
<br/><span style="color: rgb(53, 152, 219);">\[+\] Building 803.3s (10/10) FINISHED docker:desktop-linux</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load build definition from Dockerfile 0.1s</span>  
 <span style="color: rgb(53, 152, 219);">\=> => transferring dockerfile: 318B 0.0s</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load metadata for docker.io/library/ubuntu:latest 4.1s</span>  
 <span style="color: rgb(53, 152, 219);">\=> \[internal\] load .dockerignore 0.0s</span>

~/Day5-Django-web-app-containerization1\$ `docker images`  
                                                                                                                                                                                         
<span style="color: rgb(53, 152, 219);">IMAGE ID DISK USAGE CONTENT SIZE EXTRA</span>  
<span style="color: rgb(53, 152, 219);">django-app-test1:latest 519183ff71f0 898MB 235MB</span>

~Day5-Django-web-app-containerization1\$ `docker run -p 8000:8000 django-app-test1`  
<br/>

# Visual diagram 1

&nbsp;

Your Laptop (Host)  
┌─────────────────────┐  
│ │  
│ Browser │  
│ http://localhost:8000  
│ │  
│ ▼  
│ PORT 8000  
│ │  
└─────────│───────────┘  
          │  
          │ Docker port mapping  
          ▼  
Container  
┌─────────────────────┐  
│ Django Server │  
│ running on │  
│ 0.0.0.0:8000 │  
│ │  
│ PORT 8000 │  
└─────────────────────┘

&nbsp;

# Visual diagram 2

Container becomes like this:

container  
│  
├── /usr/bin/python3  
├── /usr/local/lib/python3.12/dist-packages/  
│ ├── django  
│ ├── pytz  
│ └── other packages  
│  
└── /app  
     ├── requirements.txt  
     ├── demo/  
     ├── devops/  
     ├── manage.py  
     └── db.sqlite3

&nbsp;

&nbsp;

&nbsp;

# To run project locally in laptop

<span style="color: rgb(255, 255, 255);">~/Desktop/Docker-Zero-to-Hero\$ `python3 -m venv venv`</span>

<span style="color: rgb(255, 255, 255);">~/Desktop/Docker-Zero-to-Hero\$ `source venv/bin/activate`</span>

<span style="color: rgb(255, 255, 255);">~/Desktop/Docker-Zero-to-Hero/examples/python-web-app\$ `python -m pip install -r requirements.txt`</span>

<span style="color: rgb(255, 255, 255);"><span style="color: rgb(224, 62, 45);"><span style="color: rgb(236, 240, 241);">~/Desktop/Docker-Zero-to-Hero/examples/python-web-app/devops\$</span> `python manage.py runserver`</span></span>

<span style="color: rgb(45, 194, 107);"><span>if we have some error</span></span>

<span style="color: rgb(255, 255, 255);"><span style="color: rgb(224, 62, 45);"><span style="color: rgb(236, 240, 241);">~/Desktop/Docker-Zero-to-Hero/examples/python-web-app/devops\$</span> `python manage.py migrate`</span></span>

<span style="color: rgb(255, 255, 255);"><span style="color: rgb(224, 62, 45);"><span style="color: rgb(236, 240, 241);">~/Desktop/Docker-Zero-to-Hero/examples/python-web-app/devops\$</span> `python manage.py runserver`</span></span>

&nbsp;

# Open new Django Application in laptop

https://docs.djangoproject.com/en/6.0/intro/tutorial01/

~/Desktop/Django-containerization-test2\$ `python3 --version`  
<span style="color: rgb(186, 55, 42);">Python 3.12.3</span>

~/Desktop/Django-containerization-test2\$ `python3 -m venv myenv`

~/Desktop/Django-containerization-test2\$ `source myenv/bin/activate`

<span style="color: rgb(22, 145, 121);">(myenv)</span> ~/Desktop/Django-containerization-test2\$ `python3 -m pip install Django` /  `python -m pip install Django`

<span style="color: rgb(22, 145, 121);">(myenv)</span> ~/Desktop/Django-containerization-test2\$ `python3 -m django --version` / `python -m django --version`  
6.0.2

<span style="color: rgb(22, 145, 121);">(myenv)</span> ~/Desktop/Django-containerization-test2\$ `django-admin startproject devops djangotutorial`

djangotutorial/  
├── manage.py  
└── devops/  
    ├── _*init*\_.py  
    ├── settings.py  
    ├── urls.py  
    ├── asgi.py  
    └── wsgi.py

<span style="color: rgb(22, 145, 121);">(myenv)</span> ~/Desktop/Django-containerization-test2/<span style="color: rgb(186, 55, 42);">djangotutorial</span>\$ `python3 manage.py runserver`

Starting development server at <span style="color: rgb(22, 145, 121);">http://127.0.0.1:8000/</span>

- `manage.py`: A command-line utility that lets you interact with this Django project in various ways. You can read all the details about `manage.py` in [django-admin and manage.py](https://docs.djangoproject.com/en/6.0/ref/django-admin/).
    
- `devops/`: A directory that is the actual Python package for your project. Its name is the Python package name you’ll need to use to import anything inside it (e.g. `mysite.urls`).
    
- `mysite/__init__.py`: An empty file that tells Python that this directory should be considered a Python package. If you’re a Python beginner, read [more about packages](https://docs.python.org/3/tutorial/modules.html#tut-packages "(in Python v3.14)") in the official Python docs.
    
- `mysite/settings.py`: Settings/configuration for this Django project. [Django settings](https://docs.djangoproject.com/en/6.0/topics/settings/) will tell you all about how settings work.
    
- `mysite/urls.py`: The URL declarations for this Django project; a “table of contents” of your Django-powered site. You can read more about URLs in [URL dispatcher](https://docs.djangoproject.com/en/6.0/topics/http/urls/).
    
- `mysite/asgi.py`: An entry-point for ASGI-compatible web servers to serve your project. See [How to deploy with ASGI](https://docs.djangoproject.com/en/6.0/howto/deployment/asgi/) for more details.
    
- `mysite/wsgi.py`: An entry-point for WSGI-compatible web servers to serve your project. See [How to deploy with WSGI](https://docs.djangoproject.com/en/6.0/howto/deployment/wsgi/) for more details.