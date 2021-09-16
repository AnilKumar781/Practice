showErrorToast() 
{
    const evt = new ShowToastEvent({
        title: 'Toast Error',
        message: 'Some unexpected error',
        variant: 'error',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
}

showSuccessToast() 
{
    const evt = new ShowToastEvent({
        title: 'Toast Success',
        message: 'Opearion sucessful',
        variant: 'success',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
}