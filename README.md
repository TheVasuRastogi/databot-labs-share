# DataBot Labs - Robotics E-commerce Platform

A modern, full-stack e-commerce platform for robotics products with pre-order capabilities, built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🤖 Features

- **Product Management**
  - Browse robotics products by category
  - Detailed product specifications
  - Pre-order functionality
  - Real-time stock updates

- **User Management**
  - User authentication and authorization
  - Profile management
  - Order history tracking
  - Pre-order status tracking

- **Shopping Experience**
  - Intuitive product browsing
  - Shopping cart functionality
  - Secure checkout process
  - Order confirmation and tracking

- **Admin Dashboard**
  - Product management
  - Order management
  - Pre-order management
  - User management
  - Contact form submissions

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux for state management
- Tailwind CSS for styling
- React Router for navigation
- Framer Motion for animations

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Express Validator for input validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/DataBot_Labs-website.git
cd DataBot_Labs-website
```

2. Install Backend Dependencies
```bash
cd Backend
npm install
```

3. Configure Environment Variables
```bash
# Create a config.env file in Backend/config with:
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
```

4. Install Frontend Dependencies
```bash
cd ../Frontend
npm install
```

5. Start Development Servers

Backend:
```bash
cd Backend
npm run dev
```

Frontend:
```bash
cd Frontend
npm start
```

## 📁 Project Structure

```
DataBot_Labs-website/
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
└── Frontend/
    ├── public/
    └── src/
        ├── components/
        ├── context/
        ├── hooks/
        ├── pages/
        ├── redux/
        └── utils/
```

## 🔄 Recent Updates

- Added pre-order functionality for all products
- Improved product cards with dynamic pricing
- Enhanced user profile with pre-order tracking
- Added support for international phone numbers
- Improved navigation and routing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Frontend Development: [Your Name]
- Backend Development: [Your Name]
- UI/UX Design: [Your Name]

## 📞 Support

For support, email [your-email@example.com] or join our Slack channel.