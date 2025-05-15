'use client'

import { useState } from 'react'
import NextLink from 'next/link'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from '@mui/material'
import { authClient } from '@/authclient'

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const jsonData = Object.fromEntries(formData.entries())

    const { email, password } = jsonData as { email: string; password: string }

    await authClient.signIn.email({
      email,
      password,
      callbackURL: '/dashboard',
      fetchOptions: {
        onRequest: () => setLoading(true),
        onError: (ctx) => {
          setLoading(false)
          setError(ctx.error.message)
        },
      },
    })
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 2,
        mt: 3,
      }}
    >
      <TextField
        required
        fullWidth
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="your@email.com"
        autoComplete="email"
      />
      <div>
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="••••••"
          autoComplete="current-password"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 0.5 }}>
          <Link href="/reset-password" component={NextLink} variant="body2">
            Forgot password?
          </Link>
        </Box>
      </div>
      {error && <Alert severity="error">{error}</Alert>}
      <Button
        fullWidth
        type="submit"
        variant="contained"
        loading={loading}
        loadingPosition="start"
      >
        {loading ? 'Signing In…' : 'Sign In'}
      </Button>
    </Box>
  )
}
