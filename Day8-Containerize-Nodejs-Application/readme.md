
&nbsp;

### <span style="color: rgb(22, 145, 121);">#create package.json file</span>

Day8-Containerize-Nodejs-Application\$ `npm init -y`  
Wrote to /home/ravindu/Desktop/Docker-Full-Course/Day8-Containerize-Nodejs-Application/package.json:

{  
  "name": "day8-containerize-nodejs-application",  
  "version": "1.0.0",  
  "description": "",  
  "main": "index.js",  
  "scripts": {  
    "test": "echo \\"Error: no test specified\\" && exit 1"  
  },  
  "keywords": \[\],  
  "author": "",  
  "license": "ISC",  
  "type": "commonjs"  
}

### <span style="color: rgb(22, 145, 121);">#create node modules and package-lock.json file</span>

Day8-Containerize-Nodejs-Application\$`npm install express`

added 65 packages, and audited 66 packages in 9s

22 packages are looking for funding  
  run \`npm fund\` for details

&nbsp;

Day8-Containerize-Nodejs-Application\$ <span style="color: rgb(255, 255, 255);">`npm install nodemon`</span>

added 26 packages, and audited 92 packages in 6s

27 packages are looking for funding  
  run \`npm fund\` for details

found 0 vulnerabilities

Day8-Containerize-Nodejs-Application\$ `npm install dotenv`

added 1 package, and audited 93 packages in 3s

28 packages are looking for funding  
  run \`npm fund\` for details

found 0 vulnerabilities

### <span style="color: rgb(22, 145, 121);">\# Add server.js file and .gitignore file / .env</span>

### 1\. server.js file -

### 2\. .gitignore        - node_modules ,    .env

### 3\. .env                 -  PORT = 5000

### 4\. dockerignore      -  node_modules

### <span style="color: rgb(22, 145, 121);">\# Run application</span>

Day8-Containerize-Nodejs-Application\$ `node ./server.js`  
<span style="color: rgb(22, 145, 121);">Server is running on http://localhost:5000</span>

# <span style="color: rgb(255, 255, 255);">docker file</span>

```bash
# Get the base image
FROM node:20-alpine

# set the working directory                      
WORKDIR /app                    

# copy the package.json and package-lock.json files
COPY package*.json ./

# install the dependencies
RUN npm install

# copy the rest of the application code
COPY . .

# expose the port the app runs on
EXPOSE 5000

# start the application
CMD ["npm", "start"]
```

&nbsp;

~/Desktop/Docker-Full-Course/Day8-Containerize-Nodejs-Application\$`docker build -t node-image .`

&nbsp;

```bash
~/Desktop/Docker-Full-Course/Day8-Containerize-Nodejs-Application$ docker build -t node-image .
[+] Building 231.2s (10/10) FINISHED                                                                                                                                  docker:desktop-linux
 => [internal] load build definition from dockerfile                                                                                                                                  0.1s
 => => transferring dockerfile: 428B                                                                                                                                                  0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                                                     7.4s
 => [internal] load .dockerignore                                                                                                                                                     0.1s
 => => transferring context: 54B                                                                                                                                                      0.0s
 => [1/5] FROM docker.io/library/node:20-alpine@sha256:b88333c42c23fbd91596ebd7fd10de239cedab9617de04142dde7315e3bc0afa                                                             206.7s
 => => resolve docker.io/library/node:20-alpine@sha256:b88333c42c23fbd91596ebd7fd10de239cedab9617de04142dde7315e3bc0afa                                                               0.1s
 => => sha256:7ad115895a6aadccf7f98a05c33873c04df2933ba557c5bcdbedd3de612803da 1.26MB / 1.26MB                                                                                        9.5s
 => => sha256:9d10d4687fae6e13c052431ea3221ccda835c3262df3564310345ffe173146d9 445B / 445B                                                                                            1.7s
 => => sha256:ed2fdcee5269a06b0b8b77c69867176443364a72a9626e9aa2e66ab1ebda35a7 43.22MB / 43.22MB                                                                                    204.2s
 => => sha256:589002ba0eaed121a1dbf42f6648f29e5be55d5c8a6ee0f8eaa0285cc21ac153 3.86MB / 3.86MB                                                                                       27.1s
 => => extracting sha256:589002ba0eaed121a1dbf42f6648f29e5be55d5c8a6ee0f8eaa0285cc21ac153                                                                                             0.4s
 => => extracting sha256:ed2fdcee5269a06b0b8b77c69867176443364a72a9626e9aa2e66ab1ebda35a7                                                                                             1.8s
 => => extracting sha256:7ad115895a6aadccf7f98a05c33873c04df2933ba557c5bcdbedd3de612803da                                                                                             0.1s
 => => extracting sha256:9d10d4687fae6e13c052431ea3221ccda835c3262df3564310345ffe173146d9                                                                                             0.0s
 => [internal] load build context                                                                                                                                                     0.2s
 => => transferring context: 43.78kB                                                                                                                                                  0.0s
 => [2/5] WORKDIR /app                                                                                                                                                                2.7s
 => [3/5] COPY package*.json ./                                                                                                                                                       0.2s
 => [4/5] RUN npm install                                                                                                                                                            10.5s
 => [5/5] COPY . .                                                                                                                                                                    0.2s 
 => exporting to image                                                                                                                                                                2.7s 
 => => exporting layers                                                                                                                                                               1.3s 
 => => exporting manifest sha256:470460a3e903e64a41cc68da5a79a361e2bec23dcd20bd1a39dfc13652c622e5                                                                                     0.1s 
 => => exporting config sha256:fcfa8f842b76247856cc3c050aaa0e1491375201b3abc6cfcaf0ca22870d427c                                                                                       0.1s 
 => => exporting attestation manifest sha256:ae9b03834e775da967c0f68f6455974f83c7e83ae6d81bd9c19a9c03cb6a5213                                                                         0.1s 
 => => exporting manifest list sha256:483fad2694f15741b9cb29adb637b05aa8076ef0c2102494e4e9195f5d89c17d                                                                                0.1s
 => => naming to docker.io/library/node-image:latest                                                                                                                                  0.0s
 => => unpacking to docker.io/library/node-image:latest                                                                                                                               0.9s

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/00qftbmi6sszpdlmeddx85e5t
```

&nbsp;

```bash
Day8-Containerize-Nodejs-Application$ docker images
                                                                                                                                                                       i Info →   U  In Use
IMAGE               ID             DISK USAGE   CONTENT SIZE   EXTRA
node-image:latest   483fad2694f1        206MB         50.5MB        
```

&nbsp;

```bash
Day8-Containerize-Nodejs-Application$ docker run --name node-container -p 5000:5000 node-image

> day8-containerize-nodejs-application@1.0.0 start  
> node server.js

Server is running on http://localhost:5000
```

&nbsp;

&nbsp;

```bash
/Day8-Containerize-Nodejs-Application$ docker ps
CONTAINER ID   IMAGE        COMMAND                  CREATED         STATUS         PORTS                                         NAMES
199ca8f843a6   node-image   "docker-entrypoint.s…"   4 minutes ago   Up 4 minutes   0.0.0.0:5000->5000/tcp, [::]:5000->5000/tcp   node-container

/Day8-Containerize-Nodejs-Application$ docker ps -a
CONTAINER ID   IMAGE        COMMAND                  CREATED         STATUS         PORTS                                         NAMES
199ca8f843a6   node-image   "docker-entrypoint.s…"   4 minutes ago   Up 4 minutes   0.0.0.0:5000->5000/tcp, [::]:5000->5000/tcp   node-container

/Day8-Containerize-Nodejs-Application$ docker stop node-container
node-container

/Day8-Containerize-Nodejs-Application$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

/Day8-Containerize-Nodejs-Application$ docker ps -a
CONTAINER ID   IMAGE        COMMAND                  CREATED         STATUS                      PORTS     NAMES
199ca8f843a6   node-image   "docker-entrypoint.s…"   5 minutes ago   Exited (1) 12 seconds ago             node-container
```

&nbsp;

```bash
Day8-Containerize-Nodejs-Application$ docker build -t node-image:v1 .
[+] Building 4.1s (10/10) FINISHED                                                                                                                                    docker:desktop-linux
 => [internal] load build definition from dockerfile                                                                                                                                  0.0s
 => => transferring dockerfile: 428B                                                                                                                                                  0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                                                     3.0s
 => [internal] load .dockerignore                                                                                      
```

&nbsp;

```bash
Day8-Containerize-Nodejs-Application$ docker images 
                                                                                                                                                                       i Info →   U  In Use
IMAGE               ID             DISK USAGE   CONTENT SIZE   EXTRA
node-image:latest   483fad2694f1        206MB         50.5MB    U   
node-image:v1       28257cfba15d        206MB         50.5MB    U   
```

&nbsp;

```bash
Day8-Containerize-Nodejs-Application$ docker run --name node-container-new -p 5000:5000 node-image:v1 

> day8-containerize-nodejs-application@1.0.0 start
> node server.js

Server is running on http://localhost:5000

```
### run container with volume

```bash
Day8-Containerize-Nodejs-Application$ docker run --name container1 -p 5000:5000 -v $(pwd):/app -v /app/node_modules node-image:v1

> day8-containerize-nodejs-application@1.0.0 start
> node server.js

Server is running on http://localhost:5000
```