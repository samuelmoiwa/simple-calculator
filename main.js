let number_1 = document.getElementById("in1")
let number_2 = document.getElementById("in2")



let statement = document.getElementById("statement-id")

let answer = document.getElementById("answer-out-put")


function devide(){
    let devideBTN = document.getElementById("div-btn")
    devideBTN.addEventListener("click", () => {

    if(number_1.value==="" || number_2.value===""){
        statement.innerHTML = `enter any number, and choose from the operators 😊`
    }else{
        let input_one = number_1.value
        let input_two = number_2.value

        statement.innerHTML = `If ${input_one} is divided by ${input_two} the answer is:`
        
        answer.innerHTML = input_one / input_two
    }    
    })
    }
    devide()


 function subtract(){
    let subtractBTN = document.getElementById("sub-btn")
    subtractBTN.addEventListener("click", () => {

    if(number_1.value==="" || number_2.value===""){
        statement.innerHTML = `enter any number, and choose from the operators 😊`
    }else{
        let input_one = number_1.value
        let input_two = number_2.value

        statement.innerHTML = `If ${input_one} is subtracted by ${input_two} the answer is:`
        
        answer.innerHTML = input_one - input_two
    }    
    })
    }
    subtract()

    function addition(){
        let additionBTN = document.getElementById("add-btn")
        additionBTN.addEventListener("click", () => {
    
        if(number_1.value==="" || number_2.value===""){
            statement.innerHTML = `enter any number, and choose from the operators 😊`
        }else{
            let input_one = parseInt(number_1.value)
            let input_two = parseInt(number_2.value)

            let claculate = (input_one + input_two)
    
            statement.innerHTML = `If ${input_one} is added by ${input_two} the answer is:`
            
            answer.innerHTML = claculate
        }    
        })
    }
    addition()





function clear(){
    let clear_text = document.getElementById("clearBtn")
    clear_text.addEventListener("click", () =>{
        

        if(number_1.value==="" || number_2.value===""){
            answer.innerHTML = "Answer"
            statement.innerHTML = `enter any number, and choose from the operators 😊`
        }else{
            number_1.value = ""
            number_2.value = ""
            statement.innerHTML = `Awesome!, try more calculations 😉 `
            answer.innerHTML = "Answer"
        } 
    })
    }
    clear()