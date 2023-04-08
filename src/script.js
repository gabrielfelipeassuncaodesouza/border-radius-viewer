var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var input4 = document.getElementById("input4")

var square = document.getElementById("square")
var text = document.getElementById("css-code")

function update() {
  
  let v1 = 0
  let v2 = 0
  let v3 = 0
  let v4 = 0 

  v1 = square.style.borderTopLeftRadius = input1.value + "px"
  v2 = square.style.borderTopRightRadius = input2.value + "px"
  v3 = square.style.borderBottomRightRadius = input3.value + "px"
  v4 = square.style.borderBottomLeftRadius = input4.value + "px"

  text.innerHTML = ".square {\n\n\tborder-radius: " + v1 + " " + v2 + " "+ v3 + " "+ v4 + "\n\n}"
  
}

function copyToClipboard() {
  
  text.select()
  text.setSelectionRange(0, 99999);
  
  navigator.clipboard.writeText(text.innerHTML)
  alert("You copied the code")
}


