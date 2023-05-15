//Define the global pointers to the elements
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")

const square = document.getElementById("square")
const text = document.getElementById("css-code") //textarea

update()

function update() {
  
  let v1 = 0
  let v2 = 0
  let v3 = 0
  let v4 = 0 

  v1 = square.style.borderTopLeftRadius = input1.value + "px"
  v2 = square.style.borderTopRightRadius = input2.value + "px"
  v3 = square.style.borderBottomRightRadius = input3.value + "px"
  v4 = square.style.borderBottomLeftRadius = input4.value + "px"

  text.innerHTML = `border-radius: ${v1} ${v2} ${v3} ${v4}`

  requestAnimationFrame(update)
}

function copyToClipboard() {
  text.select()
  text.setSelectionRange(0, 99999);
  
  navigator.clipboard.writeText(text.innerHTML)
  alert("You have copied the code!")
}