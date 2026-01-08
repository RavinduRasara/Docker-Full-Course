
&nbsp;

# [Installation methods](https://docs.docker.com/engine/install/ubuntu/#installation-methods)

You can install Docker Engine in different ways, depending on your needs:

- Docker Engine comes bundled with [Docker Desktop for Linux](https://docs.docker.com/desktop/setup/install/linux/). This is the easiest and quickest way to get started.
    
- Set up and install Docker Engine from [Docker's `apt` repository](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).
    
- [Install it manually](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package) and manage upgrades manually.
    
- Use a [convenience script](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script). Only recommended for testing and development environments.
    

&nbsp;

# [Install Docker Desktop](https://docs.docker.com/desktop/setup/install/linux/ubuntu/#install-docker-desktop)

Recommended approach to install Docker Desktop on Ubuntu:

1.  Set up Docker's package repository. See step one of [Install using the `apt` repository](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).
    
2.  Download the latest [DEB package](https://desktop.docker.com/linux/main/amd64/docker-desktop-amd64.deb?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-linux-amd64). For checksums, see the [Release notes](https://docs.docker.com/desktop/release-notes/).
    
3.  Install the package using `apt`:
    
4.  Install using the apt repository
    

## 1\. Set up Docker's `apt` repository.

```bash
# Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
```

## 2\. install Docker desktop

Recommended approach to install Docker Desktop on Ubuntu:

1.  Set up Docker's package repository. See step one of [Install using the `apt` repository](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).
    
2.  Download the latest [DEB package](https://desktop.docker.com/linux/main/amd64/docker-desktop-amd64.deb?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-linux-amd64). For checksums, see the [Release notes](https://docs.docker.com/desktop/release-notes/).
    
3.  Install the package using `apt`:
    

```console
sudo apt-get update
```

```console
sudo apt-get install ./docker-desktop-amd64.deb
```

&nbsp;

\$ `docker --version`  
Docker version 29.1.3, build f52814d

<span style="color: rgb(255, 255, 255);">\$ `docker run hello-world`</span>  
Unable to find image 'hello-world:latest' locally  
latest: Pulling from library/hello-world  
17eec7bbc9d7: Pull complete

Hello from Docker!  
This message shows that your installation appears to be working correctly.

<span style="color: rgb(255, 255, 255);">\$ `systemctl --user status docker-desktop`</span>  
● docker-desktop.service - Docker Desktop  
     Loaded: loaded (/usr/lib/systemd/user/docker-desktop.service; disabled; preset: enabled)  
     Active: active (running) since Thu 2026-01-08 12:54:23 +0530; 1h 10min ago  
   Main PID: 36315 (com.docker.back)

**Docker Desktop includes:**

- Docker Engine (the core)
- Docker CLI (command line)
- Docker Compose
- GUI interface

**Quick commands for Docker Desktop:**

- ### <span style="color: rgb(22, 145, 121);">systemctl --user start docker-desktop</span>
    
- ### <span style="color: rgb(22, 145, 121);"><span style="color: rgb(22, 145, 121);">systemctl --user stop docker-desktop</span></span>
    
- ### <span style="color: rgb(22, 145, 121);">systemctl --user status docker-desktop</span>
    

# Tips

<span style="color: rgb(224, 62, 45);">sudo systemctl start docker-desktop</span>  
*<span style="color: rgb(224, 62, 45);">Failed to start docker-desktop.service: Unit docker-desktop.service not found.</span>*

<span style="color: rgb(224, 62, 45);">systemctl start docker-desktop</span>  
<span style="color: rgb(224, 62, 45);"><span>Failed to start docker-desktop.service: Unit docker-desktop.service not found.</span></span>

<span style="color: rgb(224, 62, 45);">systemctl status docker-desktop</span>  
*<span style="color: rgb(224, 62, 45);">Unit docker-desktop.service could not be found.</span>*

<span style="color: rgb(255, 255, 255);">Docker Desktop runs as a **user service**, not a system service.(root/administrator level)</span>

`systemctl --user start docker-desktop`

- `systemctl` = Control services (start/stop programs)
- `--user` = For MY account (ravi) only
- `start docker-desktop` = Start Docker Desktop

**Translation:** "Start Docker Desktop for user ravi"

## What is "user" here?

**User = ravi** (your login account name)

When you log into Ubuntu, you're logging in as user "ravi". This is YOUR personal space on the computer.

## "Docker Desktop is installed for your user, not system-wide"

**Installed for your user (ravi):**

- Only YOU (ravi) can use Docker Desktop
- Docker Desktop runs when YOU log in
- Other users on this laptop can't see or use your Docker Desktop

**System-wide would mean:**

- ALL users on the laptop could use Docker
- Docker would be available to everyone

&nbsp;

### <span style="color: rgb(22, 145, 121);">docker run hello-world</span>

<span style="color: rgb(22, 145, 121);">docker --version</span>  
<span style="color: rgb(22, 145, 121);">docker ps</span>  
<span style="color: rgb(22, 145, 121);">docker images</span>

- These are **Docker CLI commands** (using Docker to work with containers)
- Once Docker Desktop is running, these commands work normally
- No `--user` needed because you're just **using** Docker, not managing the service

&nbsp;


