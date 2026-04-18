<p align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">tasklist-service</h1>

<p align="center">
Backend service for task management built with scalable architecture principles.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-in%20development-yellow" />
  <img src="https://img.shields.io/badge/node-%3E%3D20-green" />
  <img src="https://img.shields.io/badge/license-MIT-blue" />
</p>

---

## 📌 Description

`tasklist-service` is a backend application designed to manage tasks using modern software architecture patterns.

This project follows:

- Domain-Driven Design (DDD)
- Clean Architecture
- Use Case oriented structure (non-REST driven)

---

## 🧠 Architecture Overview

The project is structured to separate business rules from technical concerns:

    src/
    ├── domain/         # Business rules (entities, value objects)
    ├── application/    # Use cases
    ├── infra/          # Database, cache, external services
    ├── interfaces/     # Controllers (HTTP layer)

### Flow

    Controller → UseCase → Domain → Repository → Infra

---

## ⚙️ Tech Stack

- NestJS
- PostgreSQL
- Sequelize
- Redis

---

## 🚀 Project Setup

    npm install

---

## ▶️ Running the application

    # development
    npm run start:dev

    # production
    npm run start:prod

---

## 🧪 Tests

    # unit tests
    npm run test

    # e2e tests
    npm run test:e2e

    # coverage
    npm run test:cov

---

## 📡 API Style

This project does not follow traditional REST patterns.

Instead, endpoints are action-based:

- POST /create-task
- POST /complete-task
- POST /change-priority
- GET /list-tasks

---

## 🧩 Core Use Cases

- CreateTask
- CompleteTask
- ChangeTaskPriority
- ListTasks

---

## 🗄️ Database

- Relational database: PostgreSQL  
- Naming convention: snake_case  

---

## ⚡ Cache

- Redis for performance optimization  
- Used in task listing and invalidation strategies  

---

## 📈 Future Improvements

- Authentication service integration  
- Event-driven communication  
- API Gateway  
- Microservices extraction  

---

## 🤝 Contributing

This project is part of a personal engineering lab focused on building scalable systems.

Feel free to open issues or suggest improvements.

---

## 📄 License

This project is licensed under the MIT License.