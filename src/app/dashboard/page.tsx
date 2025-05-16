import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'

const mockSessions = [
  {
    id: 'session-1',
    deviceType: 'desktop',
    os: 'Windows 11',
    browser: 'Chrome 124',
    isCurrentSession: true,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36',
  },
  {
    id: 'session-2',
    deviceType: 'mobile',
    os: 'iOS 17',
    browser: 'Safari',
    isCurrentSession: false,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  },
  {
    id: 'session-3',
    deviceType: 'desktop',
    os: 'Ubuntu 22.04',
    browser: 'Firefox 125',
    isCurrentSession: false,
    userAgent:
      'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:125.0) Gecko/20100101 Firefox/125.0',
  },
]

const mockMembers = [
  {
    id: 'user-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Owner',
    initials: 'JD',
  },
  {
    id: 'user-2',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Admin',
    initials: 'AJ',
  },
  {
    id: 'user-3',
    name: 'Carlos Rojas',
    email: 'carlos.rojas@example.com',
    role: 'Member',
    initials: 'CR',
  },
]

const mockInvitations = [
  {
    id: 'invite-1',
    email: 'maria.perez@example.com',
    invitedAt: '2 days ago',
    initials: 'MP',
  },
  {
    id: 'invite-2',
    email: 'roberto.alvarez@example.com',
    invitedAt: '5 hours ago',
    initials: 'RA',
  },
  {
    id: 'invite-3',
    email: 'lucia.gomez@example.com',
    invitedAt: 'just now',
    initials: 'LG',
  },
]

export default async function DashboardPage() {
  return (
    <Container>
      <Typography variant="h2" component="h1" sx={{ mb: 2, py: 2 }}>
        Dashboard
      </Typography>
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardHeader
          slotProps={{ title: { variant: 'h4', component: 'h2' } }}
          title="User"
        />
        <CardContent>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
            mb={2}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar src="" sx={{ width: 54, height: 54 }} />
              <Box>
                <Typography>John Doe</Typography>
                <Typography variant="body2" color="text.secondary">
                  john.doe@example.com
                </Typography>
              </Box>
            </Stack>
            <Button variant="outlined">Edit User</Button>
          </Stack>
          <Alert severity="warning">
            <AlertTitle>Verify Your Email Address</AlertTitle>
            <div>
              Please verify your email address. Check your inbox for the
              verification email. If you haven&apos;t received the email, click
              the button below to resend.
            </div>
            <Button variant="outlined" color="warning" sx={{ mt: 2 }}>
              Resend
            </Button>
          </Alert>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h6">Active Sessions</Typography>
          <List dense>
            {mockSessions.map((session) => {
              const isMobile = session.deviceType === 'mobile'
              const Icon = isMobile ? PhoneIphoneIcon : LaptopOutlinedIcon

              return (
                <ListItem
                  key={session.id}
                  secondaryAction={
                    session.isCurrentSession ? null : (
                      <Tooltip title="Terminate session">
                        <IconButton edge="end" aria-label="terminate">
                          <LogoutIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )
                  }
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${session.os} · ${session.browser}`}
                    secondary={`${session.isCurrentSession ? 'This device' : ''}`}
                    slotProps={{
                      secondary: { color: 'success.main' },
                    }}
                  />
                </ListItem>
              )
            })}
          </List>
          <Divider sx={{ my: 3 }} />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Button variant="outlined">Change Password</Button>
            <Button variant="contained" color="error">
              Sign Out
            </Button>
          </Stack>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardHeader
          slotProps={{ title: { variant: 'h4', component: 'h2' } }}
          title="Organization"
        />
        <CardContent>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
            mb={2}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src=""
                alt="Organization Logo"
                sx={{ width: 54, height: 54 }}
              />
              <Box>
                <Typography>Acme Corp</Typography>
                <Typography variant="body2" color="text.secondary">
                  acme.corp@example.com
                </Typography>
              </Box>
            </Stack>
            <Button variant="contained">New Organization</Button>
          </Stack>
          <Divider sx={{ my: 3 }} />
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">Members</Typography>
              <List dense>
                {mockMembers.map((member) => (
                  <ListItem
                    key={member.id}
                    disableGutters
                    secondaryAction={
                      member.role === 'Owner' ? null : (
                        <Button size="small" color="error">
                          Remove
                        </Button>
                      )
                    }
                  >
                    <ListItemIcon>
                      <Avatar sx={{ width: 40, height: 40 }}>
                        {member.initials}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={member.name}
                      secondary={`${member.role} · ${member.email}`}
                    />
                  </ListItem>
                ))}
              </List>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button variant="contained">Invite Member</Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">Invitations</Typography>
              <List dense>
                {mockInvitations.map((invite) => (
                  <ListItem
                    key={invite.id}
                    disableGutters
                    secondaryAction={
                      <Button size="small" color="error">
                        Revoke
                      </Button>
                    }
                  >
                    <ListItemIcon>
                      <Avatar sx={{ width: 40, height: 40 }}>
                        {invite.initials}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={invite.email}
                      secondary={`Invited · ${invite.invitedAt}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  )
}
