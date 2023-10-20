document.getElementById('saveButton').addEventListener('click', ()=>{
  /* create task */
  let textInput = document.getElementById('textInput').value

  const p = document.createElement('p')
  p.textContent = textInput
  const button = document.createElement('button')
  button.textContent = 'V'

  const li = document.createElement('li')
  li.appendChild(button)
  li.appendChild(p)

  document.getElementById('listParent').appendChild(li)
  
  /* remove task */
  button.addEventListener('click', ()=>{
    li.remove()
  })
  
})
