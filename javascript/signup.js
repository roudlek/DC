const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (nam.value === '' || nam.value == null) {
    messages.push('*Name is required')
  }
  if (email.value === '' || email.value == null) {
    messages.push('*Email is required')
  }
  if (password1.value === '' || password1.value == null) {
    messages.push('*Password is required')
  }
  else if (password1.value.length <= 6) {
    messages.push('!Password must be longer than 6 characters')
  }

  else if (password1.value.length >= 20) {
    messages.push('!Password must be less than 20 characters')
  }

  else if (password1.value === 'password') {
    messages.push('!Password cannot be password')
  }

  if ((password2.value === '' || password2.value == null ) && (password1.value.length >=6 ) && (password1.value.length <= 20) && (password1.value != 'password') )
    {messages.push('*reentering Password is required')}

if ((password1.value !== password2.value) &&( password1.value.length <= 20) && (password2.value.length >= 1  )) {
    messages.push('!please reenter the password correctly')
  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(' \n ')
  }
})