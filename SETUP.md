# MongoDB Setup Guide for Travel Planner

This guide will help you set up MongoDB for the Travel Planner application.

## Quick Start

### 1. Install MongoDB

#### Option A: Local MongoDB (Recommended for Development)
```bash
# macOS with Homebrew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb-community

# Verify MongoDB is running
mongosh
```

#### Option B: MongoDB Atlas (Cloud - Free Tier)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string

### 2. Environment Setup

1. Create environment file:
```bash
cp env.example .env.local
```

2. Edit `.env.local` with your MongoDB connection:
```bash
# For local MongoDB
MONGODB_URI=mongodb://localhost:27017/travel-planner

# For MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/travel-planner?retryWrites=true&w=majority
```

### 3. Seed the Database

Populate the database with initial user data:
```bash
npm run seed
```

You should see:
```
Cleared existing users
Inserted 6 users
Database seeded successfully!
```

### 4. Start the Application

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Verify Setup

### Check MongoDB Connection
1. The application should load without errors
2. Users should display from the database
3. Search functionality should work

### Check Database
```bash
# Connect to MongoDB
mongosh

# Switch to database
use travel-planner

# View users
db.users.find()

# Should show 6 users with their data
```

## Troubleshooting

### Common Issues

1. **"Failed to fetch users" error**
   - Check if MongoDB is running
   - Verify MONGODB_URI in .env.local
   - Check console for connection errors

2. **"MongoDB connection failed"**
   - Ensure MongoDB service is started
   - Check if port 27017 is available
   - Verify connection string format

3. **"Database not seeded"**
   - Run `npm run seed` again
   - Check MongoDB connection
   - Verify database permissions

### Reset Database
```bash
# Clear and reseed
npm run seed
```

## Next Steps

Once MongoDB is working:
- Users are stored permanently in the database
- Search queries use MongoDB's regex search
- Easy to add/modify users through database
- Ready for production deployment

## Production Considerations

- Use MongoDB Atlas for production
- Set up proper authentication
- Configure connection pooling
- Set up monitoring and backups
- Use environment-specific connection strings
