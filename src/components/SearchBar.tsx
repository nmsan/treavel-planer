'use client';

import { Paper, InputBase, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <Box sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={0}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 600,
          mx: 2,
          backgroundColor: '#f5f5f5',
          borderRadius: 3,
          '&:hover': {
            backgroundColor: '#eeeeee'
          },
          '&:focus-within': {
            backgroundColor: 'white',
            boxShadow: '0 0 0 2px #1976d2'
          }
        }}
      >
        <Search sx={{ p: '10px', color: '#666' }} />
        <InputBase
          sx={{ 
            ml: 1, 
            flex: 1, 
            fontSize: '1.125rem',
            fontFamily: 'Open Sans, sans-serif',
            '& input': {
              color: '#333',
              '&::placeholder': {
                color: '#666',
                opacity: 1
              }
            }
          }}
          placeholder="Search..."
          onChange={handleInputChange}
        />
      </Paper>
    </Box>
  );
}
