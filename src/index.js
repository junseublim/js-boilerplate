function component() {
  const element = document.createElement('div')
  element.innerHTML = 'hello world!'
  element.classList.add('MyClass')
  return element
}

document.body.appendChild(component())
