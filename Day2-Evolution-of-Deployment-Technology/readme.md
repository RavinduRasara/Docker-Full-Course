Servers → Virtual Machines → Containers

Virtual Machine is an advancement to Physical Server, and Containers is an advancement to Virtual Machine.

# 2.1 **Physical Servers (1980s-2000s**)

Physical servers were actual hardware machines. One server = one application.

Physical Server (Hardware)

├── OS (Linux/Windows)

├── Application 1

└── Its Dependencies

### ❌ Problems with Physical Servers:

#### 1\. **Resource Wastage**

- One app running on a server uses only 10-20% of resources
    
- Other 80% of CPU, RAM, storage sits idle
    
- Very expensive, environmentally wasteful
    

#### 2\. **Poor Scalability**

- To run 10 applications, you need 10 physical servers
    
- High capital cost (\$\$\$)
    
- Data center space becomes expensive
    

#### 3\. **Difficult Maintenance**

- Each server needs physical setup and maintenance
    
- Hardware failures require manual intervention
    
- Replacement is time-consuming and costly
    

#### 4\. **Slow Deployment**

- Deploying new app takes days/weeks
    
- Manual hardware setup, OS installation, configuration
    

#### 5\. **No Isolation (But Ironically)**

- Apps on same server could interfere with each other
    
- One crashed app could affect others
    
- Resource conflicts (memory, CPU)
    

#### 6\. **High Cost**

- Very expensive infrastructure
    
- Cooling costs, electricity, physical space
    
- ROI was poor
    

# 2.2 Virtual Machines

Virtual Machines are software-based simulations  top of a physical server.

Physical Server (Hardware)

│

├── Hypervisor (VMware, Hyper-V, KVM)

│

├── VM 1 (Guest OS + App 1)

├── VM 2 (Guest OS + App 2)

├── VM 3 (Guest OS + App 3)

└── VM 4 (Guest OS + App 4)

#### ✅ 1. **Resource Utilization**

- One physical server could run 5-10 VMs
    
- Resources shared and optimized
    
- Reduced hardware cost significantly
    

#### ✅ 2. **Better Scalability**

- Easy to create new VMs (just a software instance)
    
- Spin up VMs in minutes instead of days
    
- No new hardware required
    

#### ✅ 3. **Isolation**

- Each VM has its own OS, memory, storage
    
- Application failure in one VM doesn't affect others
    
- Security separation
    

#### ✅ 4. **Cost Reduction**

- Less physical hardware needed
    
- Lower electricity and cooling costs
    
- Better ROI
    

### ❌ Problems with Virtual Machines

Despite being great improvement, VMs had significant drawbacks:

#### 1\. **Still Heavy and Resource-Intensive**

- Each VM needs a **full OS** (1-10 GB)
    
- Even if running a simple app, you need full OS
    
- Example: Running Node.js app? Still need entire Windows/Linux OS
    

#### 2\. **Slow Boot Time**

- VM boot: 1-3 minutes (full OS startup)
    
- Not suitable for rapid scaling
    

#### 3\. **High Maintenance Overhead**

- Each VM needs OS updates, patches, management
    
- Managing 10 VMs = managing 10 operating systems
    
- Complex and time-consuming
    

#### 4\. **License Costs**

- Each VM needs OS license
    
- Multiple OSs = multiple licenses = expensive
    

#### 5\. **Not Truly Portable**

- VM created on VMware might not work on Hyper-V
    
- Hypervisor lock-in
    
- Limited portability across platforms
    

#### 6\. **Overkill for Simple Apps**

- A simple web app doesn't need full OS capabilities
    
- But with VMs, you're forced to carry entire OS
    
- Wasteful for microservices architecture
    

Company running microservices (20 small services)

Using VMs: Need 20 VMs

\- 20 x Full OS = 200 GB storage waste

\- 20 x OS maintenance = nightmare

\- 20 x OS boot = slow deployment

\= Still not optimal solution

# 2.3 Containers

—**NOT a full OS**.

Physical Server (Hardware)

├── Single OS (Linux/Windows)

├── Container Runtime (Docker Engine)

│ ├── Container 1 (App 1 + Dependencies)

│ ├── Container 2 (App 2 + Dependencies)

│ ├── Container 3 (App 3 + Dependencies)

│ ├── Container 4 (App 4 + Dependencies)

│ ├── Container 5 (App 5 + Dependencies)

│ └── ... 50+ containers

│

└── All containers share same OS kernel

### How Containers Solved VM Problems:

#### ✅ 1. **Lightweight**

- Container: 10-100 MB (just app + dependencies)
    
- VM: 1-10 GB (full OS + app)
    
- **100x smaller than VMs!**
    

#### ✅ 2. **Ultra-Fast Boot Time**

- Container start: 100-500 milliseconds
    
- VM start: 1-3 minutes
    
- **Massive difference!** ⚡
    

#### ✅ 3. **Resource Efficiency**

- All containers share same OS kernel
    
- No OS overhead per container
    
- Better CPU and memory utilization
    

#### ✅ 4. **Easy Maintenance**

- Single OS to manage (not 50+)
    
- No per-container OS updates
    
- Simple and scalable
    

#### ✅ 5. **True Portability**

- Container built on your laptop runs on cloud unchanged
    
- Works on Linux, Windows, macOS
    
- No hypervisor lock-in
    

#### ✅ 6. **Perfect for Microservices**

- Each microservice gets its own container
    
- Easy to deploy, scale, update independently
    
- Enables DevOps practices
    

#### ✅ 7. **Isolation (Like VMs)**

- Each container has isolated filesystem
    
- Process isolation
    
- Namespace and cgroup technology provides isolation
    
- But much lighter than VMs
    

&nbsp;