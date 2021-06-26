class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
    clear() {
        this.currentOperand =''
        this.previousOperand = ''
        this.operation=undefined
    }

    delete(){
        this.currentOperand= parseInt(this.currentOperand/10)

    }

    appendNumber(number){
        this.currentOperand+=number
    }

    chooseOperation(operation){


    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

allClearButton.addEventListener('click', ()=> {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', ()=>{
    calculator.delete()
    calculator.updateDisplay()
})

document.addEventListener('keypress',(event)=>{
    var name=event.key;
    var code = event.code;
    var key=event.keyCode;
    numberButtons[name].click()
    if(key==8){

    alert(`hi`)
    //alert(`Key pressed ${name} \r\n key code value: ${code}`)
    }
},false);
