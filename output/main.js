let calculator= document.querySelector("#calculator")
let buttons = document.querySelectorAll("button")
let input= document.querySelector("#input-box")
console.log(calculator)

buttons.forEach((btn)=>{

      btn.addEventListener("click", function(event){
            if(event.target.value == "Ac"){
                  input.value = ""
            }else if(event.target.value == "DEL"){
                input.value= input.value.slice(0,-1)
            }else if(event.target.value == "="){
      
                 input.value= eval(input.value)
            }
            else{
                  input.value += event.target.value
            }
      })
      
})
