import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {
    // This method is from parent to child
    constructor(){
        super()
        console.log("This is a Parent constructor")
    }
    //This method is from Parent child
   connectedCallback(){
        console.log("This is parent connectedCallback")
    }
    // This method is bascically from child to parent 
    renderedCallback(){
        console.log("This is parent renderedcallBack")
    }
}
