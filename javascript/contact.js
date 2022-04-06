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

  if (textarea.value === '' || textarea.value == null) {
    messages.push('*fill the text area')
  }


  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join('\n ')
  }
})