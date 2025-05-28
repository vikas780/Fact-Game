const ValidateRegister = ({ name, email, phone, password, confirmpass }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^[0-9]{10}$/

  const errors = {}

  if (!name.trim()) errors.name = 'Please enter name'

  if (!email.trim()) {
    errors.email = 'Email is required'
  } else if (!emailRegex.test(email)) {
    errors.email = 'Invalid email'
  }

  if (!phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!phoneRegex.test(phone)) {
    errors.phone = 'Invalid phone number (must be 10 digits)'
  }

  if (!password) {
    errors.password = 'Password is required'
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  if (!confirmpass) {
    errors.confirmpass = 'Please confirm your password'
  } else if (password !== confirmpass) {
    errors.confirmpass = 'Password does not match'
  }

  return errors
}

export default ValidateRegister
