import { LightningElement , track } from "lwc";
export default class Calculator extends LightningElement {
    @track firstNumber;
    @track secondNumber;
    resultValue;

    handleChangeOne(event){
        this.firstNumber= parseInt(event.target.value);
    }
    handleChangeTwo(event){
        this.secondNumber = parseInt(event.target.value);
    }
    addition(){
        this.resultValue = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    subraction(){
        this.resultValue = parseInt(this.firstNumber) - parseInt(this.secondNumber);
    }
    Multiply(){
        this.resultValue = parseInt(this.firstNumber) * parseInt(this.secondNumber);
    }
    Division(){
        this.resultValue = parseInt(this.firstNumber) / parseInt(this.secondNumber);

    }
}

