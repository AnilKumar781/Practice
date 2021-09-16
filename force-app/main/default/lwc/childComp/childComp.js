import { LightningElement } from 'lwc';

export default class ChildComp extends LightningElement {
    handleChange(event){
        this.progressValue= event.target.value;
        const selectedEvent = new CustomEvent("progressvaluechange", {
            detail: this.progressValue
          });
          this.dispatchEvent(selectedEvent);
    }
}