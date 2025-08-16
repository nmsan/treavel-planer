import connectDB from './mongodb';
import User from '../models/User';

const users = [
  {
    id: 1,
    firstName: "Adam",
    lastName: "Anderson",
    location: "Chicago, IL",
    state: "Illinois"
  },
  {
    id: 2,
    firstName: "Benjamin",
    lastName: "Blake",
    location: "San Francisco, CA",
    state: "California"
  },
  {
    id: 3,
    firstName: "Caleb",
    lastName: "Carter",
    location: "Boston, MA",
    state: "Massachusetts"
  },
  {
    id: 4,
    firstName: "Daniel",
    lastName: "Davis",
    location: "Miami, FL",
    state: "Florida"
  },
  {
    id: 5,
    firstName: "Ethan",
    lastName: "Edwards",
    location: "Seattle, WA",
    state: "Washington"
  },
  {
    id: 6,
    firstName: "Felix",
    lastName: "Foster",
    location: "Springfield, IL",
    state: "Illinois"
  }
];

async function seedDatabase() {
  try {
    await connectDB();
    
    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');
    
    // Insert new users
    const result = await User.insertMany(users);
    console.log(`Inserted ${result.length} users`);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
