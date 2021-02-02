function addItem() {
    let userInputText = document.getElementById('newItemText');
    let userInputValue = document.getElementById('newItemValue');

    if (userInputText.value && userInputValue.value){
        let parentMenu = document.querySelector('#menu');
        let option = document.createElement('option');
        option.textContent = `${userInputText.value} ${userInputValue.value}`
        parentMenu.appendChild(option);
        userInputText.value = '';
        userInputValue.value = '';
    }
}