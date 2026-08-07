# 🥗 NutriAI — AI Nutrition Analyzer

> An AI-powered full-stack nutrition analysis platform that helps users estimate the nutritional value of their meals, track eating habits, and monitor health insights through an intuitive dashboard.

🌐 **Live Demo:** https://nutrition-analyzer-mjmdsieqt-santosh-kumar-pasis-projects.vercel.app/login

🚀 **Backend API:** https://nutrition-analyzer-api-3tqq.onrender.com

---

## 📖 Overview

NutriAI is a modern full-stack web application that leverages AI to analyze meals and estimate their nutritional content. Users can securely register, log in, analyze meals, view nutritional history, monitor weekly calorie trends, and manage their health data through a responsive dashboard.

The application follows a client-server architecture with a React frontend, Spring Boot REST API, PostgreSQL database, and JWT-based authentication.

---

# ✨ Features

### 🔐 Authentication

* Secure User Registration
* JWT Authentication
* BCrypt Password Encryption
* Protected REST APIs
* Persistent Login Session

---

### 🍽 AI Meal Analysis

Analyze meals using AI and receive:

* 🔥 Calories
* 💪 Protein
* 🥖 Carbohydrates
* 🥑 Fat
* 🌾 Fiber
* ❤️ Health Score
* 💡 Personalized Nutrition Suggestions

---

### 📊 Dashboard

* Nutrition Overview
* Total Meals
* Total Calories
* Average Health Score
* Weekly Calories Chart
* Recent Meal History

---

### 📜 Meal History

* View all analyzed meals
* Human-friendly date formatting
* Delete meals
* Nutrition summary cards

---

### 📈 Weekly Analytics

* Interactive calorie chart
* Live data from PostgreSQL
* Responsive visualizations using Recharts

---

### 🎨 Modern User Interface

* Responsive Design
* Tailwind CSS
* Beautiful Dashboard
* Toast Notifications
* Delete Confirmation Modal
* Clean and Minimal UI

---

# 🏗️ System Architecture

```text
                React + Vite
                     │
                     ▼
            Spring Boot REST API
                     │
                     ▼
            Neon PostgreSQL Database
                     │
                     ▼
                  Groq AI API
```

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hot Toast
* Recharts
* React Icons

---

## Backend

* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate
* JWT Authentication
* Bean Validation
* Lombok

---

## Database

* PostgreSQL
* Neon

---

## AI Integration

* Groq API
* Llama 3.3 70B Versatile

---

## Deployment

| Service  | Platform |
| -------- | -------- |
| Frontend | Vercel   |
| Backend  | Render   |
| Database | Neon     |

---

# 📂 Project Structure

```text
Nutrition-Analyzer
│
├── src/                    # Spring Boot Backend
│
├── ui/                     # React Frontend
│
├── pom.xml
├── Dockerfile
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/SantoshkrPasi/Nutrition-Analyzer.git

cd Nutrition-Analyzer
```

---

## Backend Setup

Create:

```text
application-local.yml
```

Configure your local database and API keys.

Run:

```bash
./mvnw spring-boot:run
```

Backend:

```text
http://localhost:8080
```

---

## Frontend Setup

```bash
cd ui

npm install

npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🔑 Environment Variables

## Backend

```properties
SPRING_PROFILES_ACTIVE=prod

DB_URL=
DB_USERNAME=
DB_PASSWORD=

JWT_SECRET=

GROQ_API_KEY=
```

---

## Frontend

```properties
VITE_API_URL=https://nutrition-analyzer-api-3tqq.onrender.com/api
```

---

# 📚 REST API

## Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

---

## Meals

| Method | Endpoint               |
| ------ | ---------------------- |
| POST   | /api/food/analyze      |
| GET    | /api/food/history      |
| DELETE | /api/food/history/{id} |

---

## Dashboard

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /api/dashboard |

---

# 🔒 Security

* JWT Authentication
* Stateless Sessions
* BCrypt Password Hashing
* Spring Security
* CORS Configuration
* Protected REST Endpoints

---

# 🌟 Future Enhancements

* 👤 User Profile Management
* 📷 Image-Based Food Recognition
* 📄 Export Nutrition Reports (PDF)
* 🎯 Daily Nutrition Goals
* 💧 Water Intake Tracking
* 🌙 Dark Mode
* 📱 Progressive Web App (PWA)
* 📧 Email Verification & Password Reset

---

# 📷 Screenshots

Add screenshots here after deployment.

```
screenshots/
│
├── login.png
├── register.png
├── dashboard.png
├── analyze-meal.png
└── meal-history.png
```

---

# 👨‍💻 Developer

**Santosh Kumar Pasi**

* GitHub: https://github.com/SantoshkrPasi
* Portfolio: *(Add your portfolio link if available)*
* LinkedIn: *(Add your LinkedIn profile)*

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Show Your Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.

It helps others discover the project and motivates future improvements.
