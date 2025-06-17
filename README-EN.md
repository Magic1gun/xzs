# Project Introduction

Xuezhisi Open - Source Examination System is a Java + Vue front - end and back - end separation examination system. Its main advantages are simple and quick development and deployment, user - friendly interface design, and clear code structure. It supports web and WeChat mini - programs, covering PC and mobile devices.
It supports multiple deployment methods: integrated deployment, front - end and back - end separation deployment, and docker deployment.

## Student System Features

| Module | Introduction |
| --- | --- |
| Login | Username, password |
| Registration | Grade, username, password |
| Task Center | Administrators release grade tasks, and each student can only take them once. |
| Examination | Question stems support text, images, mathematical formulas, tables, etc. Students' answering supports text. |
| Fixed Test Papers | Reusable and self - graded test papers. |
| Timed Test Papers | Reusable and self - graded test papers within time limits. |
| Examination Records | View answer records and test paper information. |
| Error Book | Wrong questions automatically enter the error book, showing basic question information. |
| Personal Information | Displays students' personal information. |
| Update Information | Modify personal information and avatar. |
| Personal Dynamics | Displays users' recent personal dynamics. |
| Message Center | Used to receive messages sent by administrators. |

## Management System Features

| Module | Introduction |
| --- | --- |
| Login | Username, password |
| Homepage | Total number of test papers, total number of questions, user activity, and monthly number of questions. |
| Student List | Shows all students in the system, with functions to add, modify, delete, and disable. |
| Administrator List | Shows all administrators in the system, with functions to add, modify, delete, and disable. |
| Subject List | Subject inquiry, modification, deletion |
| Subject Creation | Create subjects |
| Test Paper List | Test paper inquiry, modification, deletion |
| Test Paper Creation | Created test papers are timed test papers, fixed test papers, and task test papers. |
| Question List | Question inquiry, modification, deletion |
| Question Creation | Questions support single - choice, multiple - choice, true - false, fill - in - the - blank, and short - answer questions. Question stems support text, images, tables, and mathematical formulas. |
| Task List | Task inquiry, modification, deletion |
| Message List | Shows sent messages, the number of recipients who have read, etc. |
| Message Sending | Send messages to multiple users |
| User Logs | Shows all user logs |
| Personal Information | Displays the administrator's username and real name. |
| Timeline | Displays the administrator's creation time. |
| Update Information | Modify name and phone number. |

## Development Environment

### 1. Environment Dependencies

| Component | Version | Download Address |
| --- | --- | --- |
| Node.js | 16 | [Download Node.js 16](https://nodejs.org/download/release/latest-v16.x) |
| JDK | 1.8 | [Download JDK 1.8](https://www.oracle.com/java/technologies/downloads/#java8-windows) |
| MySQL | 8.0 | [Download MySQL 8.0 Installer](https://dev.mysql.com/downloads/windows/installer/8.0.html) |

### 2. Initialization

- **Database Preparation**
    - Create database: `CREATE DATABASE xzs CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;`
    - Import script: `xzs-mysql.sql`

- **Default Accounts**
    - Student end: `student / 123456`
    - Admin end: `admin / 123456`

### 3. Backend Development

- **Code Path**
    - `xzs/source/xzs` (It is recommended to open it with IntelliJ IDEA)

- **Configuration Modification**
    - Modify the MySQL address in `application-dev.yml`
    - Qiniu Cloud Configuration: Modify the `qn` parameters in `application.yml` (for file storage)

- **Service Startup**
    - Default port: `8000`
    - Access addresses:
        - Student end: `http://ip:8000/student`
        - Admin end: `http://ip:8000/admin`

### 4. Frontend Development

- **Install Dependencies**
    ```bash
    npm config set sass_binary_site https://registry.npmmirror.com
    npm install --registry https://registry.npmmirror.com
    ```
    > If installation fails, delete `node_modules` and replace it with the extracted `node_modules.zip`.

- **Start Development Server**
    ```bash
    npm run serve
    ```

- **Build Command**
    ```bash
    npm run build
    ```

- **Code Paths**
    - Student end: `source/vue/xzs-student`
    - Admin end: `source/vue/xzs-admin`

## Deployment Methods

### 1. Integrated Deployment

- **Steps**
    1. Package the frontend code and place the `student` and `admin` folders into `\source\xzs\src\main\resources\static`.
    2. Modify the database address in `application-prod.yml`.
    3. Package the Java project into a JAR package.
    4. Startup command:
        ```bash
        nohup java -Duser.timezone=Asia/Shanghai -jar -Dspring.profiles.active=prod xzs-3.9.0.jar > start1.log 2>&1 &
        ```

- **Access Addresses**
    - Student end: `http://ip:8000/student`
    - Admin end: `http://ip:8000/admin`

### 2. Front-End and Back-End Separation Deployment

- **Backend**
    - Same as above (running on port `8000`)

- **Frontend (Nginx)**
    - Directory: `/usr/local/xzs/web/`
    - Place the packaged `student` and `admin` folders here.
    - Nginx configuration:
        ```nginx
        server {
            listen 8001;
            server_name xzs;

            location / {
                root /usr/local/xzs/web/;
                index index.html;
            }

            location /api/ {
                proxy_pass http://localhost:8000;
            }
        }
        ```

- **Access Addresses**
    - Student end: `http://ip:8001/student`
    - Admin end: `http://ip:8001/admin`

### 3. Docker Deployment

- **Steps**
    1. Prepare SQL script:
        ```sql
        CREATE DATABASE `xzs` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
        USE xzs;
        -- Followed by the content of xzs-mysql.sql
        ```
    2. Copy the `docker` directory to `/usr/local/xzs`.
    3. Install Docker Compose:
        ```bash
        cd /usr/local/xzs/install
        mv docker-compose-linux-x86_64 /usr/local/bin/docker-compose
        chmod +x /usr/local/bin/docker-compose
        docker-compose --version
        ```
    4. Start the service:
        ```bash
        cd /usr/local/xzs
        docker-compose up -d
        ```

- **Access Addresses**
    - Student end: `http://ip:8000/student`
    - Admin end: `http://ip:8000/admin`

## Directory Structure

```
xzs/
├── source/               # Source code directory
│   ├── xzs               # Backend code
│   └── vue/
│       ├── xzs-student   # Student end frontend
│       └── xzs-admin     # Admin end frontend
├── docker/               # Docker deployment files
└── logs/                 # Log directory
```

## Notes

- You need to register and configure the keys for Qiniu Cloud storage on your own.
- After frontend packaging, ensure the path matches the backend static resource directory.
- When deploying with Docker, check that the firewall ports (8000/8001) are open.
- It is recommended to use the `application-prod.yml` configuration in production environments.