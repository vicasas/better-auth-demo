import NextLink from 'next/link'
import { Box, Container, Link, Typography } from '@mui/material'
import SignInForm from '@/components/SignInForm'

export default async function SignInPage() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          mt: 4,
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 0.5 }}>
          Sign in
        </Typography>
        <Typography color="text.secondary">
          {"Don't have an account?"}{' '}
          <Link href="/signup" component={NextLink}>
            Sign Up
          </Link>
          .
        </Typography>
        <SignInForm />
      </Box>
    </Container>
  )
}
