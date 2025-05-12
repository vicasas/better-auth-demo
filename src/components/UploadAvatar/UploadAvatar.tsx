'use client'

import { useState } from 'react'
import { Avatar, Box, Button } from '@mui/material'

interface UploadAvatarProps {
  onChange: (file: File) => void
}

export default function UploadAvatar({ onChange }: UploadAvatarProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      setLoading(true)

      const reader = new FileReader()

      reader.onloadend = () => {
        setTimeout(() => {
          setPreview(reader.result as string)
          setLoading(false)
          onChange(file)
        }, 2000) // Simulate a delay
      }

      reader.onerror = () => {
        console.error('Error reading file')
        setLoading(false)
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Avatar
        src={preview ?? ''}
        alt="Profile preview"
        sx={{ width: 56, height: 56 }}
      />
      <Button
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        loading={loading}
        loadingPosition="start"
      >
        {loading ? 'Uploading...' : 'Upload Profile Image'}
        <Box
          component="input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          sx={{
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: 1,
            overflow: 'hidden',
            position: 'absolute',
            bottom: 0,
            left: 0,
            whiteSpace: 'nowrap',
            width: 1,
          }}
        />
      </Button>
    </Box>
  )
}
