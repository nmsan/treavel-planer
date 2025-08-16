import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { FlightTakeoff } from '@mui/icons-material';

export default function Header() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#f8f9fa',
        boxShadow: 'none',
        borderBottom: '1px solid #e9ecef'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FlightTakeoff sx={{ color: '#1976d2', fontSize: 32 }} />
          <Typography 
            variant="h4" 
            component="h1" 
            sx={{ 
              color: '#1976d2', 
              fontWeight: 700,
            }}
          >
            TRAVEL PLANNER
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          size="large"
          sx={{ 
            backgroundColor: '#1976d2',
            px: 4,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: 'Open Sans, sans-serif',
            '&:hover': {
              backgroundColor: '#1565c0'
            }
          }}
        >
          PLAN A TRIP
        </Button>
      </Toolbar>
    </AppBar>
  );
}
