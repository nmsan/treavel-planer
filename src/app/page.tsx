'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import UserProfiles from '@/components/UserProfiles';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  location: string;
  state: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchResult, setSearchResult] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load users from the Next.js API route
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error loading users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (term: string) => {
    if (!term.trim()) {
      setFilteredUsers(users);
      setSearchResult('');
      return;
    }

    const searchTerm = term.toLowerCase().trim();
    
    const filtered = users.filter(user => {
      const firstName = user.firstName.toLowerCase();
      const lastName = user.lastName.toLowerCase();
      const location = user.location.toLowerCase();
      const state = user.state.toLowerCase();
      
      // Check if search term matches first name, last name, location, or state
      return firstName.includes(searchTerm) ||
             lastName.includes(searchTerm) ||
             location.includes(searchTerm) ||
             state.includes(searchTerm);
    });

    setFilteredUsers(filtered);
    
    // Set search result display text
    if (filtered.length > 0) {
      // Check if any user's location or state contains the search term
      const hasLocationOrStateMatch = filtered.some(user => {
        const location = user.location.toLowerCase();
        const state = user.state.toLowerCase();
        return location.includes(searchTerm) || state.includes(searchTerm);
      });
      
      if (hasLocationOrStateMatch) {
        setSearchResult(term);
      } else {
        setSearchResult('');
      }
    } else {
      setSearchResult('');
    }
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: 'white' }}>
        <Header />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          <Typography variant="h6" sx={{ color: '#666' }}>
            Loading users...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {searchResult && (
        <Box sx={{ backgroundColor: '#f5f5f5', py: 3 }}>
          <Container maxWidth="lg">
            <Typography 
              variant="h5" 
              sx={{ 
                textAlign: 'center', 
                color: '#000',
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 600
              }}
            >
              {searchResult}
            </Typography>
          </Container>
        </Box>
      )}
      <UserProfiles users={filteredUsers} />
    </Box>
  );
}
