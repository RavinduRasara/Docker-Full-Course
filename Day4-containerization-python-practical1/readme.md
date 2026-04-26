
&nbsp;

Main project github link - https://github.com/RavinduRasara/Docker-Full-Course.git

# Simple python code

print("hi docker test 1!")  
x =100  
y = 50  
z = x+y  
print(z)

# Docker file

```bash
#Starts with Ubuntu Linux as the base operating system
FROM ubuntu:latest

#sets /app as the working directory inside the container (Creating a folder where your application will live) 
WORKDIR /app

# Copies all files from your current folder (on your computer) into /app (inside the container),(Putting your app.py file into the container)  
COPY . /app

# Install the necesary packages
RUN apt-get update && apt-get install -y python3-pip

#set the envionment variable
ENV NAME=world

#Run the command to start the application
CMD ["python3", "app.py"]
```

# 1\. To push image to docker hub (option 1)

Terminal

`sudo apt-get update && sudo apt-get install -y pass`

`gpg --generate-key`

`pass init "test@docker.com"`

`docker push ravi943/first-python-image:latest`

&nbsp;

# 2\. To push image to docker hub (Option 2)

```
Kubernetes-Services$ docker login -u ravi943

i Info → A Personal Access Token (PAT) can be used instead.
         To create a PAT, visit https://app.docker.com/settings
         
         
Password: 

WARNING! Your credentials are stored unencrypted in '/home/ravindu/.docker/config.json'.
Configure a credential helper to remove this warning. See
https://docs.docker.com/go/credential-store/

Login Succeeded
```

&nbsp;

<span style="color: rgb(224, 62, 45);">if we have a dockerhub loging issue after enter correct password use this way. but this is not secure in real production.</span>

```
Kubernetes-Services$ nano ~/.docker/config.json
```

Edit like this -

```
{
        "auths": {      },
        "credsStore": "",
        "currentContext": "desktop-linux"
}
```

&nbsp;

```
Kubernetes-Services$ docker push ravi943/python-sample-app-demo:v1

The push refers to repository [docker.io/ravi943/python-sample-app-demo]
6e86424a6650: Pushed 
69798425136b: Pushed 
7a29cceca459: Pushed 
ce189430bfa6: Pushing [=====================================>             ]  154.1MB/204.6MB
b40150c1c271: Pushed 
34c0d40d228c: Pushed 

```

&nbsp;

### **Error Note -**

#### The Error

Docker on Linux uses **GPG encryption** to securely save your login credentials. But GPG was **not properly set up** on your system, so when Docker tried to encrypt and save your password it failed with:

```
encryption failed: No data
```

#### The Cause

In `~/.docker/config.json` this line was the problem:

json

```json
"credsStore": "desktop"
```

This tells Docker → *"use GPG/desktop to store credentials"* → but GPG wasn't working → **crash!**

#### The Fix

We changed it to empty string:

json

```json
"credsStore": ""
```

This tells Docker → *"just save credentials in the JSON file directly"* — no GPG needed → **works!**

#### The Warning

After fix you saw:

```
WARNING! Your credentials are stored unencrypted
```

This is **normal and acceptable** for a local dev/learning machine. Only worry about it on production servers.