// material-ui
import { styled } from '@mui/material/styles';
// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper1 = styled('div')(({ theme }) => ({
  position: 'relative', // Add position relative to the parent
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url('/assets/bg1.jpg')`,
    animation: 'zoom 7s ease-in-out infinite alternate',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Gray overlay color
  },
  '@keyframe s zoom': {
    from: {
      transform: 'scale(1)'
    },
    to: {
      transform: 'scale(1.02)'
    }
  },

  // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[100],
  minHeight: '100vh',
  overflow: 'hidden'
}));

export default AuthWrapper1;
