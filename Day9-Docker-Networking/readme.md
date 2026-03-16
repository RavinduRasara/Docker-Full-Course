
&nbsp;

<span style="color: rgb(224, 62, 45);">1\. Docker to **run the container in the background**.(**detached mode**)</span>

```bash
Day9-Docker-Networking$ docker run -d --name login nginx:latest
Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx
9eef040df109: Pull complete 
79697674b897: Pull complete 
75a1d70aee50: Pull complete 
206356c42440: Pull complete 
a9d395129dce: Pull complete 
df9da45c1db2: Pull complete 
18a071c04bd1: Pull complete 
d99947bc9177: Download complete 
23abb0f9ce55: Download complete 
Digest: sha256:bc45d248c4e1d1709321de61566eb2b64d4f0e32765239d66573666be7f13349
Status: Downloaded newer image for nginx:latest
a6d69aff7b9c96093fcb33bc3ab6f6fc211f0760a3e644a09f1aca47520b3b6d
```

<span style="color: rgb(224, 62, 45);">2\. Run a command inside an already running container</span>

```bash
Day9-Docker-Networking$ docker exec -it login /bin/bash
root@a6d69aff7b9c:/# 
```

| Part | Meaning |
| --- | --- |
| `docker exec` | Run a command inside a running container |
| `-it` | Interactive terminal |
| `login` | Container name |
| `/bin/bash` | Start the bash shell |

&nbsp;

| Part | Meaning |
| --- | --- |
| `root` | You are logged in as root user |
| `a6d69aff7b9c` | Container ID |
| `/` | Current directory |

```bash
root@a6d69aff7b9c:/# apt update
Get:1 http://deb.debian.org/debian trixie InRelease [140 kB]
Get:2 http://deb.debian.org/debian trixie-updates InRelease [47.3 kB]
Get:3 http://deb.debian.org/debian-security trixie-security InRelease [43.4 kB]
Get:4 http://deb.debian.org/debian trixie/main amd64 Packages [9671 kB]
Get:5 http://deb.debian.org/debian trixie-updates/main amd64 Packages [5412 B]                                                                                                                                                      
Get:6 http://deb.debian.org/debian-security trixie-security/main amd64 Packages [111 kB]                                                                                                                                            
Fetched 10.0 MB in 42s (240 kB/s)                                                                                                                                                                                                   
12 packages can be upgraded. Run 'apt list --upgradable' to see them.
```

<span style="color: rgb(224, 62, 45);">3\. `ping` is used to **test network connectivity between machines**.</span>

<span style="color: rgb(224, 62, 45);">install it to test communication between containers.</span>

```bash
root@a6d69aff7b9c:/# apt-get install iputils-ping -y
Reading package lists... Done
Building dependency tree... Done
```

root@a6d69aff7b9c:/# `ping -V`  
ping from iputils 20240905

<span style="color: rgb(224, 62, 45);">4\. Run another new container</span>

```bash
Day9-Docker-Networking$ docker run -d --name logout nginx:latest
7148ed709a7939b89c323d6ad9570a576952abe2e130cad352753f1fb2fdf37e
```

<span style="color: rgb(224, 62, 45);">5\. Checking running container</span> 

```bash
Day9-Docker-Networking$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED             STATUS             PORTS     NAMES
7148ed709a79   nginx:latest   "/docker-entrypoint.…"   2 minutes ago       Up 2 minutes       80/tcp    logout
a6d69aff7b9c   nginx:latest   "/docker-entrypoint.…"   About an hour ago   Up About an hour   80/tcp    login
```

<span style="color: rgb(224, 62, 45);">6\. To check ip-address of login and logout container</span>

```bash
Day9-Docker-Networking$ docker inspect login
"bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "MacAddress": "f2:52:cd:29:e2:8f",
                    "DriverOpts": null,
                    "GwPriority": 0,
                    "NetworkID": "5d83ceadc5b45f5a5c338ac9867a097aaf77ba4a4920ac57bebb8edf7a2fb0b7",
                    "EndpointID": "e6d30f0d44a9ab61a17eda3996caf92d16989f173882d8fe1e23408638865516",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "DNSNames": null
                }
```

"IPAddress": "172.17.0.2",

```bash
docker inspect logout
 "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "MacAddress": "aa:a5:c9:30:2c:b7",
                    "DriverOpts": null,
                    "GwPriority": 0,
                    "NetworkID": "5d83ceadc5b45f5a5c338ac9867a097aaf77ba4a4920ac57bebb8edf7a2fb0b7",
                    "EndpointID": "124c931501ef108afb73feaca4f2c3c55fb2de244962ebd4345437edb4d40b56",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.3",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "DNSNames": null
                }
```

"IPAddress": "172.17.0.3",

<span style="color: rgb(224, 62, 45);">Both of container should be in the same subnet. because we are using default Bridge Network, both of them  should be in the same subnet.</span>

# What is a Subnet (Simple idea)

A **subnet** is a **small network inside a bigger network**.

Think of it like this:

🏢 **Apartment building**

- Building = Network
    
- Each floor = Subnet
    
- Rooms = Devices
    

Devices on the **same floor (same subnet)** can easily talk to each other.