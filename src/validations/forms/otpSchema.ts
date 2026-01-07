import * as z from 'zod'

import config from '@/config/schema/authForm.ts'

export const otpSchema = z.object({
    otp: z.string()
        .min(1, 'OTP is required')
        .min(config.otp.length, 'OTP is too short')
        .max(config.otp.length, 'Invalid OTP')
        .regex(RegExp(config.otp.pattern), 'Invalid OTP')
})

export type OtpSchema = z.infer<typeof otpSchema>
