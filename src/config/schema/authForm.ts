export default {
    password: {
        minLength: 8,
        format: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        formatMessage: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
    }
}
