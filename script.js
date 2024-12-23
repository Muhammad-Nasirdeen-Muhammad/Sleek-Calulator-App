const display = document.querySelector(".display")
const fval = document.querySelector(".fval")
const button = document.querySelectorAll(".btn")

let firstVal = ""
let Used_operator = ""
let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"]
let operators = ["*", "-", "+", "/", "."]
let isCalculated = false

function operation(el){
    firstVal = Number(display.innerHTML)
    fval.innerHTML += `${firstVal} <div class="oper"></div>`
    display.innerHTML = ""
}

function calculation(){
    switch(Used_operator){
        case "*":
            display.innerHTML = firstVal * Number(display.innerHTML)
            console.log(firstVal * Number(display.innerHTML))
            fval.innerHTML = ""
            break
        case "-":
            display.innerHTML = firstVal - Number(display.innerHTML)
            fval.innerHTML = ""
            break
        case "/":
            display.innerHTML = firstVal / Number(display.innerHTML)
            fval.innerHTML = ""
            break
        case "+":
            display.innerHTML = firstVal + Number(display.innerHTML)
            fval.innerHTML = ""
            break
    }
    isCalculated = true
    
}
document.addEventListener("keydown", (e) => {
    if (values.includes(e.key)){
        if(e.key != "Backspace"){
            if(!isCalculated){
                display.innerHTML += e.key
                console.log(e.key)
                display.scrollLeft = display.scrollWidth
            }
            else{
                display.innerHTML = ""
                isCalculated = false
            }
            
        }
        else{
            display.innerHTML = display.innerHTML.slice(0, -1)
        }
    }
    else if(operators.includes(e.key)){
        Used_operator = e.key
        operation(e)

    }
    else if(e.key == "Enter"){
       calculation()
    }
    else{
        //Skip
    }
    
})
let buttons = Array.from(button)
buttons.forEach(el => {
    el.addEventListener("click", () =>  {
        if(values.includes(el.innerHTML)){
            if(!isCalculated){
                display.innerHTML += el.innerHTML   
            }
            else{
                display.innerHTML = ""
                isCalculated = false
            }
        }
        else if(operators.includes(el.innerHTML)){
            Used_operator = el.innerHTML
            operation(el)
        }
        else if (el.innerHTML == "="){
            calculation()
        }
    })
})