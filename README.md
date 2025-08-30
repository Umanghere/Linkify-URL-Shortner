# Linkify - URL Shortener Service

A comprehensive link management platform where users can create and manage shortened links through their own accounts, with automatic expired link cleanup to keep everything clean and secure.

## 🚀 Live Demo
- **App:** https://linkify-frontend-sooty.vercel.app/

## 📦 Repository
- **GitHub:** https://github.com/Umanghere/Linkify-URL-Shortner

## 📸 Screenshots

### 🏠 Landing Page
![Landing Page](https://github.com/Umanghere/Linkify-URL-Shortner/blob/main/frontend/assets/Landing%20Page.png?raw=true)

### 🔐 User Dashboard
![User Dashboard](https://github.com/Umanghere/Linkify-URL-Shortner/blob/main/frontend/assets/After%20Login%20.png?raw=true)

### 📊 Login and Sign Up Page
![Login Page](https://github.com/Umanghere/Linkify-URL-Shortner/blob/main/frontend/assets/Login%20.png?raw=true)

![Sign Up Page](https://github.com/Umanghere/Linkify-URL-Shortner/blob/main/frontend/assets/Sign%20UP.png?raw=true)

### 🔗 Link Management
![Link Management Interface](https://github.com/Umanghere/Linkify-URL-Shortner/blob/main/frontend/assets/urls.png?raw=true)

## ✨ Features
- 🔗 **URL Shortening** - Create custom short links with personalized aliases
- 👤 **User Account System** - Secure user registration and authentication
- 📊 **Click Analytics** - Track clicks, geographic data, and referrer information
- ⏰ **Automatic Expiration** - Set expiration dates with automatic cleanup
- 🛡️ **Secure Link Validation** - Input sanitization and malicious URL detection
- 🗂️ **Link Organization** - Categorize and manage links efficiently
- 📈 **Performance Metrics** - Detailed analytics and reporting

## 🛠️ Tech Stack
**Frontend:** 
- React.js
- CSS3
- JavaScript (ES6+)
- Bootstrap/Tailwind CSS
**Backend:** 
- Node.js
- Express.js
**Database:** 
- MongoDB
**Authentication:** 
- JWT Authentication
**Other:**
- REST APIs, URL Validation, Analytics Tracking

## 📁 Project Structure
```
linkify/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
└── README.md
```

## ⚙️ Environment Variables
Create `.env` file in backend directory:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
BASE_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB database
- Modern web browser

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Umanghere/Linkify
- cd Linkify
```

2. **Install dependencies**
```bash
# Install backend dependencies
- cd backend
- npm install

# Install frontend dependencies
- cd ../frontend
- npm install
```

3. **Set up environment variables**
```bash
# Create .env file in backend directory
- cp .env.example .env
# Add your MongoDB URI and other credentials
```

4. **Set up database**
```bash
# Make sure MongoDB is running
# The app will create necessary collections automatically
```

5. **Run the application**
```bash
# Start backend server (Terminal 1)
- cd backend
- npm run dev

# Start frontend (Terminal 2)
- cd frontend
- npm start
```

6. **Open your browser**
Navigate to `http://localhost:3000`

## 🔧 Scripts

#### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run seed` - Seed database with sample data

#### Frontend  
- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests

## 🌟 Key Highlights

- **Complete User Management** - Full authentication system with user accounts and secure login/registration
- **Smart Link Management** - Create, edit, delete, and organize shortened URLs with custom aliases
- **Automatic Cleanup System** - Implemented background jobs for expired link removal and database optimization
- **Scalable Architecture** - Built with MERN stack for high performance and scalability
- **Production Ready** - Deployed with proper error handling and monitoring

## 🔮 Future Enhancements

- [ ] QR code generation for shortened links
- [ ] Bulk URL shortening
- [ ] API rate limiting and quotas
- [ ] Link preview functionality
- [ ] Custom domain support

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

