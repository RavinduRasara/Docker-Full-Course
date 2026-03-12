
&nbsp;

# Docker volume

A **Volume** is a storage area **managed by Docker** itself. Docker decides where to save the data on your computer.

<span style="color: rgb(22, 145, 121);">YOU ──► docker volume create volumetest1</span>  
<span style="color: rgb(22, 145, 121);">DOCKER ──► creates storage at /var/lib/docker/volumes/volumetest1/_data</span>

- <span style="color: rgb(22, 145, 121);">A **volume** is stored outside the container’s file system.</span>
- <span style="color: rgb(22, 145, 121);">Data **survives** even if container is deleted.</span>
- <span style="color: rgb(22, 145, 121);">Multiple containers can share the same volume.</span>
- <span style="color: rgb(22, 145, 121);">you **cannot** find it in your normal folders because Docker hides it deep inside `/var/lib/docker/volumes/...`</span>

<span style="color: rgb(224, 62, 45);">ex -     --mount source=volumetest1, target=/app</span>

&nbsp;

# Bind Mount?

Bind Mount - What bind mount does is  it will bind a specific directory on our container with a specific directory on the host operating system.

<span style="color: rgb(22, 145, 121);">~/Desktop/myproject ──► /app (inside container)</span>

- <span style="color: rgb(22, 145, 121);">You **can see and edit** files directly in File Explorer.(we  can open your normal folder on and directly see and edit)</span>
- <span style="color: rgb(22, 145, 121);">You control the location</span>
- <span style="color: rgb(22, 145, 121);">Changes on your computer reflect **immediately** in container</span>

&nbsp;

&nbsp;

# <span style="color: rgb(255, 255, 255);">Like this:(volume vs bind)</span>

### <span style="color: rgb(53, 152, 219);"># VOLUME ──► source is a NAME</span>

`<span style="color: rgb(224, 62, 45);">--mount source=volumetest1,target=/app</span>`

### <span style="color: rgb(53, 152, 219);"># BIND MOUNT ──► source is a PATH on your computer</span>

`<span style="color: rgb(224, 62, 45);">--mount source=/home/ravindu/Desktop/myproject,target=/app</span>`

&nbsp;

&nbsp;

# Project 1

Git clone https://github.com/RavinduRasara/Docker-Full-Course.git

/Desktop/Docker-Full-Course/Day4-containerization-python-practical1$ `ls`  
<span style="color: rgb(53, 152, 219);">app.py dockerfile</span>

### <span style="color: rgb(45, 194, 107);"># create docker image</span>

<span style="color: rgb(53, 152, 219);"><span style="color: rgb(255, 255, 255);">Day4-containerization-python-practical1$</span> `docker build -t volumedemo .`</span>  
<span style="color: rgb(53, 152, 219);">[+] Building 19.3s (9/9) FINISHED docker:desktop-linux</span>  
 <span style="color: rgb(53, 152, 219);">=> [internal] load build definition from dockerfile 0.0s</span>  
 <span style="color: rgb(53, 152, 219);">=> => transferring dockerfile: 596B 0.0s</span>  
 <span style="color: rgb(53, 152, 219);">=> [internal] load metadata for docker.io/library/ubuntu:latest</span>

### <span style="color: rgb(45, 194, 107);"># create docker volume</span>

Day4-containerization-python-practical1$ `docker volume create volumetest1`  
<span style="color: rgb(53, 152, 219);">volumetest1</span>

Day4-containerization-python-practical1$ `docker volume ls`  
DRIVER VOLUME NAME  
<span style="color: rgb(53, 152, 219);">local volumetest1</span>

### <span style="color: rgb(45, 194, 107);"># check information about  volume</span>

Day4-containerization-python-practical1$ `docker volume inspect volumetest1`  
[  
    {  
        <span style="color: rgb(255, 255, 255);"><span style="color: rgb(53, 152, 219);">"CreatedAt": "2026-03-12T06:50:00Z",</span></span>  
        <span style="color: rgb(53, 152, 219);">"Driver": "local",</span>  
        <span style="color: rgb(53, 152, 219);">"Labels": null,</span>  
        <span style="color: rgb(53, 152, 219);">"Mountpoint": "/var/lib/docker/volumes/volumetest1/_data",</span>  
        <span style="color: rgb(53, 152, 219);">"Name": "volumetest1",</span>  
        <span style="color: rgb(53, 152, 219);">"Options": null,</span>  
        <span style="color: rgb(53, 152, 219);">"Scope": "local"</span>  
    }  
]

### <span style="color: rgb(45, 194, 107);"># run docker container with mount</span>

Day4-containerization-python-practical1$ `docker run -d --mount source=volumetest1,target=/app volumedemo`  
<span style="color: rgb(53, 152, 219);">a1dd947e70c9de5f4e07a058dcd540cea48bf01f9c0f3bc373f64384d8dc84b1</span>

### <span style="color: rgb(45, 194, 107);"># show only currently running containers</span>

Day4-containerization-python-practical1$ `docker ps`  
<span style="color: rgb(53, 152, 219);">CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES</span>

### <span style="color: rgb(45, 194, 107);"># shows **all** containers including stopped ones</span>

Day4-containerization-python-practical1$ `docker ps -a`  
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES  
<span style="color: rgb(53, 152, 219);">3c80b64e6fee volumedemo "python3 app.py" 47 minutes ago Exited (0) 5 minutes ago gallant_matsumoto</span>

### <span style="color: rgb(45, 194, 107);"># check the details about container</span>

Day4-containerization-python-practical1$ `docker inspect 3c80b64e6fee`  
[  
    <span style="color: rgb(53, 152, 219);">{</span>  
        <span style="color: rgb(53, 152, 219);">"Id": "3c80b64e6fee900136c10acbf241c58bb0d36f708819fd7ef99c9efc80da2120",</span>  
        <span style="color: rgb(53, 152, 219);">"Created": "2026-03-12T07:17:41.961579567Z",</span>  
        <span style="color: rgb(53, 152, 219);">"Path": "python3",</span>  
        <span style="color: rgb(53, 152, 219);">"Args": [</span>  
            <span style="color: rgb(53, 152, 219);">"app.py"</span>

&nbsp;        <span style="color: rgb(53, 152, 219);">"Mounts": [</span>  
                <span style="color: rgb(53, 152, 219);">{</span>  
                    <span style="color: rgb(53, 152, 219);">"Type": "volume",</span>  
                    <span style="color: rgb(53, 152, 219);">"Source": "volumetest1",</span>  
                    <span style="color: rgb(53, 152, 219);">"Target": "/app"</span>  
                <span style="color: rgb(53, 152, 219);">}</span>  
            <span style="color: rgb(53, 152, 219);">],</span>

&nbsp;           <span style="color: rgb(53, 152, 219);">"Mounts": [</span>  
            <span style="color: rgb(53, 152, 219);">{</span>  
                <span style="color: rgb(53, 152, 219);">"Type": "volume",</span>  
                <span style="color: rgb(53, 152, 219);">"Name": "volumetest1",</span>  
                <span style="color: rgb(53, 152, 219);">"Source": "/var/lib/docker/volumes/volumetest1/_data",</span>  
                <span style="color: rgb(53, 152, 219);">"Destination": "/app",</span>  
                <span style="color: rgb(53, 152, 219);">"Driver": "local",</span>  
                <span style="color: rgb(53, 152, 219);">"Mode": "z",</span>  
                <span style="color: rgb(53, 152, 219);">"RW": true,</span>  
                <span style="color: rgb(53, 152, 219);">"Propagation": ""</span>  
            <span style="color: rgb(53, 152, 219);">}</span>

Day4-containerization-python-practical1 $ `docker logs 3c80b64e6fee`  
<span style="color: rgb(53, 152, 219);">hi docker test 1!</span>  
<span style="color: rgb(53, 152, 219);">150</span>  
<span style="color: rgb(53, 152, 219);">hi docker test 1!</span>  
<span style="color: rgb(53, 152, 219);">150</span>

&nbsp;

**Q: Are Volume and Bind Mount the same thing?**

> They both solve the same problem — keeping data safe. But the difference is WHO is in control. With a Volume, Docker is in control. With a Bind Mount, you are in control.

**Q: When would you use a Volume vs Bind Mount?**

> If I'm building something for production, like a database, I'd go with a Volume because it's safer and Docker manages it. But if I'm just developing and I want to edit code and see changes immediately inside the container, I'd use a Bind Mount.

**Q: What happens to Volume data when you delete the container?**

> That's actually the whole point of volumes! Even if you delete the container, the data is still there. The volume lives separately from the container.

**Q: Can two containers share the same volume?**

> Yes! And I actually saw this happen in my own practice. I created two containers with the same volume, and the second container could see all the data the first container wrote. That's really useful when multiple containers need t