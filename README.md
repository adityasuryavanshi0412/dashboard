# 🧑‍💼 Employee Task Management Dashboard

A role-based **Employee Task Management Dashboard** built using **React + Vite**, where **Admin can assign tasks** and **Employees can track their tasks** in real time.

---

## 🚀 Features

### 🔐 Authentication (Role Based)
- Admin Login
- Employee Login
- Validation using local data
- Logout functionality

### 👨‍💼 Admin Dashboard
- Create and assign tasks to employees
- Assign task category, title, date, and description
- View all employees with:
  - New tasks count
  - Active tasks
  - Completed tasks
  - Failed tasks
- Real-time task updates using React Context API

### 👷 Employee Dashboard
- Personalized greeting with username
- Task summary cards:
  - New Tasks
  - Active Tasks
  - Completed Tasks
  - Failed Tasks
- View assigned tasks with:
  - Category
  - Date
  - Description
  - Task status (New / Active / Completed / Failed)

### ⚙️ Data Handling
- Centralized state management using **React Context API**
- Initial data stored in **LocalStorage**
- Dynamic task updates without page reload

---

## 🛠️ Tech Stack

- React JS
- Vite
- JavaScript (ES6)
- Tailwind CSS
- Context API
- LocalStorage

---

## 🧪 Demo Credentials

### 👨‍💼 Admin
- Email: `admin@example.com`
- Password: `123`

### 👷 Employee
- Email: `e@e.com`
- Password: `123`

---

## 🚀 Installation & Setup

```bash
git clone https://github.com/adityasuryavanshi0412/dashboard.git
cd dashboard
npm install
npm run dev
