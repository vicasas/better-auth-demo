'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import { authClient } from '@/authclient'
import UploadAvatar from '@/components/UploadAvatar'

function convertImageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => {
      resolve(reader.result as string)
    }
    reader.onerror = (error) => {
      reject(error)
    }
  })
}

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const jsonData = Object.fromEntries(formData.entries())

    const { firstName, lastName, email, password, allowExtraEmails } =
      jsonData as {
        firstName: string
        lastName: string
        email: string
        password: string
        allowExtraEmails?: 'on'
      }

    const extraEmailsOptIn = allowExtraEmails === 'on'

    await authClient.signUp.email({
      email,
      password,
      name: `${firstName} ${lastName}`,
      image: profileImage ? await convertImageToBase64(profileImage) : '',
      extraEmailsOptIn,
      // BUG: The `callbackURL` is not working
      callbackURL: '/dashboard',
      fetchOptions: {
        onRequest: () => setLoading(true),
        onSuccess: () => router.push('/dashboard'),
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
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            required
            fullWidth
            id="firstName"
            name="firstName"
            type="text"
            label="First Name"
            placeholder="John"
            autoComplete="given-name"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            required
            fullWidth
            id="lastName"
            name="lastName"
            type="text"
            label="Last Name"
            placeholder="Doe"
            autoComplete="family-name"
          />
        </Grid>
      </Grid>
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
      <TextField
        required
        fullWidth
        id="password"
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="••••••"
        autoComplete="new-password"
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
      <UploadAvatar onChange={setProfileImage} />
      <FormControlLabel
        control={
          <Checkbox
            id="allowExtraEmails"
            name="allowExtraEmails"
            color="primary"
          />
        }
        label="I want to receive updates via email."
        slotProps={{ typography: { variant: 'body2' } }}
      />
      {error && <Alert severity="error">{error}</Alert>}
      <Button
        fullWidth
        type="submit"
        variant="contained"
        loading={loading}
        loadingPosition="start"
      >
        {loading ? 'Signing Up…' : 'Sign Up'}
      </Button>
    </Box>
  )
}
