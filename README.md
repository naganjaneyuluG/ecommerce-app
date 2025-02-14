```

ecommerce-api/
│── config/
│   ├── db.js                # Database connection
│── controllers/
│   ├── authController.js     # Authentication (Login/Register)
│   ├── productController.js  # Product Management
│   ├── orderController.js    # Order Management
│   ├── userController.js     # User Management
│── middleware/
│   ├── authMiddleware.js     # JWT Authentication
│   ├── roleMiddleware.js     # Role-based access control
│── models/
│   ├── User.js               # User Schema
│   ├── Product.js            # Product Schema
│   ├── Order.js              # Order Schema
│── routes/
│   ├── authRoutes.js         # Authentication Routes
│   ├── productRoutes.js      # Product Routes
│   ├── orderRoutes.js        # Order Routes
│   ├── userRoutes.js         # User Routes
│── views/                    # (Optional) If using templating engine
│── .env                      # Environment variables
│── server.js                 # Main entry point
│── package.json              # Dependencies
│── README.md                 # Documentation

```