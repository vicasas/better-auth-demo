import NextLink from 'next/link'
import { Box, Container, Link, Typography } from '@mui/material'
import SignUpForm from '@/components/SignUpForm'

export default async function SignUpPage() {
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
          Create an account
        </Typography>
        <Typography color="text.secondary">
          Already have an account?{' '}
          <Link href="/signin" component={NextLink}>
            Sign In
          </Link>
          .
        </Typography>
        <SignUpForm />
        <Typography variant="caption" sx={{ textAlign: 'center', mt: 2 }}>
          By clicking «Create account», you agree to the <br />
          <Link href="/" target="_blank" component={NextLink}>
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/" target="_blank" component={NextLink}>
            Privacy Policy
          </Link>
          .
        </Typography>
      </Box>
    </Container>
  )
}
