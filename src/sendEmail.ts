import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL
const RESEND_OVERRIDE_TO_EMAIL = process.env.RESEND_OVERRIDE_TO_EMAIL

if (!RESEND_API_KEY) {
  throw new Error('❌ The environment variable RESEND_API_KEY is missing.')
}

if (!RESEND_FROM_EMAIL) {
  throw new Error('❌ The environment variable RESEND_FROM_EMAIL is missing.')
}

const resend = new Resend(RESEND_API_KEY)

export default async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  try {
    const targetEmail = RESEND_OVERRIDE_TO_EMAIL ?? to

    const response = await resend.emails.send({
      to: targetEmail,
      from: RESEND_FROM_EMAIL as string,
      subject,
      html,
    })

    if (response.error) {
      console.error('Failed to send email:', response.error)
      throw new Error(`API error: ${response.error.message}`)
    }

    console.info('Email sent:', {
      to,
      messageId: response.data?.id,
    })
  } catch (err) {
    console.error('Unexpected error:', err)
    throw new Error('Failed to send email due to an unexpected error.')
  }
}
