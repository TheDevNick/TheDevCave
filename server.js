const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require('./routes/api/users')
const profileRoutes = require('./routes/api/profile')
const authRoutes = require('./routes/api/auth')
const postsRoutes = require('./routes/api/posts')
const app = express();

const Logger = require('./services/logger_service')
const log = new Logger('SERVER')
// connect to DB
connectDB()

// Initialize middleware
app.use(express.json({ extended: false}))

app.get("/", (req, res) => {
  res.send("api running.");
});

// Define routes
app.use('/api/users', userRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/posts', postsRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => log.info(`Server running on port: ${PORT}`));
