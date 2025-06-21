
## 项目介绍

学之思开源考试系统是一款 java + vue 的前后端分离的考试系统。主要优点是开发、部署简单快捷、界面设计友好、代码结构清晰。支持web端和微信小程序，能覆盖到pc机和手机等设备。
支持多种部署方式：集成部署、前后端分离部署、docker部署。


### 学生系统功能

|  模块   | 介绍  |
|  ----  | ----  |
| 登录  | 用户名、密码  |  
| 注册  | 年级、用户名、密码  |  
| 任务中心  | 管理员发布的年级任务，每个学生只能做一次  |  
| 考试  | 题干支持文本、图片、数学公式、表格等，学生答题支持：文本  |  
| 固定试卷  | 可重复练习、自行批改的试卷  |  
| 时段试卷  | 在时间限制内，可重复练习、自行批改的试卷  |  
| 考试记录  | 查看答卷记录和试卷信息  |  
| 错题本  | 答错题目会自动进入错题本，显示题目基本信息  |  
| 个人信息  | 显示学生个人资料  |  
| 更新信息  | 修改个人资料、头像  |  
| 个人动态  | 显示用户最近的个人动态  |  
| 消息中心  | 用于接收管理员发送的消息  |  

### 管理系统功能

|  模块   | 介绍  |
|  ----  | ----  |
| 登录  | 用户名、密码  |  
| 主页  | 试卷总数、题目总数、用户活跃度、题目月数量  |  
| 学生列表  | 显示系统所有的学生，新增、修改、删除、禁用  |  
| 管理员列表  | 显示系统所有的管理员，新增、修改、删除、禁用  |  
| 学科列表  | 学科查询、修改、删除  |  
| 学科创编  | 创建学科  |  
| 试卷列表  | 试卷查询、修改、删除  |  
| 试卷创编  | 创建的试卷为时段试卷、固定试卷、任务试卷  |  
| 题目列表  | 题目查询、修改、删除  |  
| 题目创建  | 题目支持单选题、多选题、判断题、填空题、简答题，题干支持文本、图片、表格、数学公式  |  
| 任务列表  | 任务查询、修改、删除  |  
| 消息列表  | 显示已发送的消息，消息已读人数等信息  |  
| 消息发送  | 发送消息给多个用户  |  
| 用户日志  | 显示所有用户日志  |  
| 个人资料  | 显示管理员用户名、真实姓名  |  
| 时间线  | 显示管理员创建时间  |  
| 修改资料  | 修改姓名、手机号  |  




##  开发环境

### 1. 环境依赖

| 组件       | 版本  | 下载地址                                                                 |
|------------|-------|--------------------------------------------------------------------------|
| Node.js    | 16    | [Node.js 16 下载](https://nodejs.org/download/release/latest-v16.x)      |
| JDK        | 1.8   | [JDK 1.8 下载](https://www.oracle.com/java/technologies/downloads/#java8-windows) |
| MySQL      | 8.0   | [MySQL 8.0 Installer](https://dev.mysql.com/downloads/windows/installer/8.0.html) |

### 2. 初始化说明

- **数据库准备**  
  - 创建数据库：`CREATE DATABASE xzs CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;`
  - 导入脚本：`xzs-mysql.sql`

- **默认账号**  
  - 学生端：`student / 123456`  
  - 管理端：`admin / 123456`

### 3. 后端开发

- **代码路径**  
  `xzs/source/xzs`（建议使用 IntelliJ IDEA 打开）

- **配置修改**  
  - 修改 `application-dev.yml` 中的 MySQL 地址  
  - 七牛云配置：修改 `application.yml` 中的 `qn` 参数（用于文件存储）

- **启动服务**  
  - 默认端口：`8000`  
  - 访问地址：  
    - 学生端：`http://ip:8000/student`  
    - 管理端：`http://ip:8000/admin`

### 4. 前端开发

- **安装依赖**  
  ```bash
  npm config set sass_binary_site https://registry.npmmirror.com
  npm install --registry https://registry.npmmirror.com
  ```
  > 若安装失败，删除 `node_modules` 后解压 `node_modules.zip` 替换。

- **启动开发服务器**  
  ```bash
  npm run serve
  ```

- **打包命令**  
  ```bash
  npm run build
  ```

- **代码路径**  
  - 学生端：`source/vue/xzs-student`  
  - 管理端：`source/vue/xzs-admin`

---

##  部署方式

### 1. 集成部署

- **步骤**  
  1. 打包前端代码，将 `student` 和 `admin` 文件夹放入：  
     `\source\xzs\src\main\resources\static`  
  2. 修改 `application-prod.yml` 中的数据库地址  
  3. 打包 Java 项目为 JAR 包  
  4. 启动命令：  
     ```bash
     nohup java -Duser.timezone=Asia/Shanghai -jar -Dspring.profiles.active=prod xzs-3.9.0.jar > start1.log 2>&1 &
     ```

- **访问地址**  
  - 学生端：`http://ip:8000/student`  
  - 管理端：`http://ip:8000/admin`

### 2. 前后端分离部署

- **后端**  
  同上（运行在 `8000` 端口）

- **前端（Nginx）**  
  - 目录：`/usr/local/xzs/web/`  
  - 放置打包后的 `student` 和 `admin` 文件夹  
  - 配置 Nginx：  
    ```nginx
    server {
        listen       8001;
        server_name  xzs;

        location / {
            root /usr/local/xzs/web/;
            index index.html;
        }

        location /api/ {
            proxy_pass http://localhost:8000;
        }
    }
    ```

- **访问地址**  
  - 学生端：`http://ip:8001/student`  
  - 管理端：`http://ip:8001/admin`

### 3. Docker 部署

- **步骤**  
  1. 准备 SQL 脚本：  
     ```sql
     CREATE DATABASE `xzs` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
     USE xzs;
     -- 后续为 xzs-mysql.sql 内容
     ```
  2. 将 `docker` 目录复制到 `/usr/local/xzs`  
  3. 安装 Docker Compose：  
     ```bash
     cd /usr/local/xzs/install
     mv docker-compose-linux-x86_64 /usr/local/bin/docker-compose
     chmod +x /usr/local/bin/docker-compose
     docker-compose --version
     ```
  4. 启动服务：  
     ```bash
     cd /usr/local/xzs
     docker-compose up -d
     ```

- **访问地址**  
  - 学生端：`http://ip:8000/student`  
  - 管理端：`http://ip:8000/admin`

---

##  目录结构

```
xzs/
├── source/               # 源码目录
│   ├── xzs               # 后端代码
│   └── vue/
│       ├── xzs-student   # 学生端前端
│       └── xzs-admin     # 管理端前端
├── docker/               # Docker 部署文件
└── logs/                 # 日志目录
```

---

##  注意事项

- 七牛云存储需自行注册并配置密钥  
- 前端打包后需确认路径与后端静态资源目录一致  
- Docker 部署时需检查防火墙端口开放（8000/8001）  
- 生产环境建议使用 `application-prod.yml` 配置  

---


