import NextLink from 'next/link'
import {
  Container,
  Typography,
  Box,
  Stack,
  Chip,
  Link,
  Button,
} from '@mui/material'

const features = [
  'Email & Password',
  'Organization',
  'Password Reset',
  'Email Verification',
  'Roles & Permissions',
  'Rate Limiting',
  'Session Management',
]

export default function HomePage() {
  return (
    <Container
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
      }}
    >
      <Stack sx={{ alignItems: 'center' }}>
        <Typography
          variant="h1"
          sx={{ fontWeight: 'bold', textAlign: 'center', mb: 0.5 }}
        >
          Better Auth{' '}
          <Box component="span" role="img" aria-label="lock">
            🔐
          </Box>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 2 }}
        >
          Explore the{' '}
          <Link
            href="https://better-auth.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            better-auth
          </Link>{' '}
          demo and see what modern auth should feel like.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            flexWrap: 'wrap',
            maxWidth: 580,
            mb: 4,
          }}
        >
          {features.map((feature) => (
            <Chip
              key={feature}
              label={feature}
              variant="outlined"
              size="small"
            />
          ))}
        </Box>
        <Stack spacing={2} direction="row">
          <Button component={NextLink} href="/signin" variant="outlined">
            Sign in
          </Button>
          <Button component={NextLink} href="/signup" variant="contained">
            Sign up
          </Button>
        </Stack>
      </Stack>
      {/* <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          Better Auth.
        </Typography>
        <Typography>
          Explore the{' '}
          <Link
            href="https://better-auth.com"
            target="_blank"
            underline="hover"
          >
            better-auth
          </Link>{' '}
          demo.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            flexWrap: 'wrap',
            maxWidth: 580,
          }}
        >
          {features.map((feature) => (
            <Chip
              key={feature}
              label={feature}
              variant="outlined"
              size="small"
            />
          ))}
        </Box>
        <Stack spacing={2} direction="row">
          <Button component={NextLink} href="/signin" variant="outlined">
            Sign in
          </Button>
          <Button component={NextLink} href="/signup" variant="contained">
            Sign up
          </Button>
        </Stack>
      </Stack> */}
    </Container>
  )
}
