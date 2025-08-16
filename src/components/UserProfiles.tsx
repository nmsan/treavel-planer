import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { Person } from '@mui/icons-material';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  location: string;
  state: string;
}

interface UserProfilesProps {
  users: User[];
}

export default function UserProfiles({ users }: UserProfilesProps) {
  if (users.length === 0) {
    return (
      <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 2, py: 6 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            color: '#666',
          }}
        >
          No users found matching your search.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 2, py: 6 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: 4 
        }}
      >
        {users.map((user) => (
          <Box key={user.id}>
            <Card 
              elevation={0}
              sx={{ 
                width: 200,
                textAlign: 'center',
                border: '1px solid #e0e0e0',
                borderRadius: 3,
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease-in-out'
                }
              }}
            >
              <CardContent sx={{ py: 3 }}>
                <Avatar
                  sx={{
                    width: 96,
                    height: 96,
                    mx: 'auto',
                    mb: 2,
                    backgroundColor: '#1976d2',
                    border: '2px solid #000',
                    '& .MuiAvatar-fallback': {
                      fontSize: '2rem'
                    }
                  }}
                >
                  <Person sx={{ fontSize: 48, color: 'white' }} />
                </Avatar>
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    color: '#000',
                    fontWeight: 600,
                    mb: 1
                  }}
                >
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: '#000',
                    mb: 0.5
                  }}
                >
                  {user.location}
                </Typography>
                <Typography 
                  variant="body2"
                  sx={{ 
                    color: '#666',
                    fontSize: '0.875rem'
                  }}
                >
                  {user.state}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
