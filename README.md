# Travel Planner

A functional Next.js application that replicates the Travel Planner mock-up design. This application allows users to search for travel companions by first name, last name, or location.

## Author
Asanka Nawarathna
## Technology Stack

- **Next.js 15** - React framework with API routes
- **TypeScript** - Type safety
- **Material-UI (MUI) 7** - Component library and styling
- **Open Sans** - Typography
- **Emotion** - CSS-in-JS styling engine
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM for Node.js
- **Next.js API Routes** - Backend endpoints for user data

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB (local or cloud)

### MongoDB Setup

#### Option 1: Local MongoDB
1. Install MongoDB locally:
   ```bash
   # macOS with Homebrew
   brew tap mongodb/brew
   brew update
   brew install mongodb-community@8.0
   
   # Start MongoDB service
   brew services start mongodb-community
   ```

### Environment Configuration

1. Copy the environment template:
   ```bash
   cp env.example .env.local
   ```

2. Update `.env.local` with your MongoDB connection string:
   ```bash
   # For local MongoDB
   MONGODB_URI=mongodb://localhost:27017/travel-planner
   
   # For MongoDB Atlas
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/travel-planner?retryWrites=true&w=majority
   ```

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Seed the database with initial user data: (Start mongodb first)
   ```bash
   npm run seed
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── users/
│   │       ├── route.ts          # GET /api/users - All users from MongoDB
│   │       └── search/route.ts   # GET /api/users/search?q=query - Search users in MongoDB
│   ├── globals.css               # Global styles with Open Sans font
│   ├── layout.tsx                # Root layout with MUI theme provider
│   └── page.tsx                  # Main page with search logic
├── components/
│   ├── Header.tsx                # Header with title, icon and button
│   ├── SearchBar.tsx             # Search input with search icon
│   ├── UserProfiles.tsx          # User profile cards display
│   └── ThemeRegistry.tsx         # MUI theme configuration
├── lib/
│   ├── mongodb.ts                # MongoDB connection utility
│   └── seed.ts                   # Database seeding script
└── models/
    └── User.ts                   # Mongoose User model
```

## API Endpoints

- **GET /api/users** - Returns all users from MongoDB
- **GET /api/users/search?q=query** - Returns filtered users from MongoDB based on search query

## Database Schema

### User Model
```typescript
interface User {
  id: number;           // Unique identifier
  firstName: string;    // User's first name
  lastName: string;     // User's last name
  location: string;     // User's city and state abbreviation (e.g., "Miami, FL")
  state: string;        // Full state name (e.g., "Florida")
  createdAt: Date;      // Record creation timestamp
  updatedAt: Date;      // Record update timestamp
}
```