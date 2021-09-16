import { LightningElement, track } from 'lwc';

export default class TrackDecorator extends LightningElement {
    @track greeting='This is a Track Decorator'
    changeHandler(event){
        this.greeting= event.target.value
    }
}