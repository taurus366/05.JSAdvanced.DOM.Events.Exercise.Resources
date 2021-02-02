function encodeAndDecodeMessages() {
    let bodyMain = document.getElementById('main');
    bodyMain.addEventListener('click', clicked);

    let firstText = bodyMain.querySelector('div').querySelector('textarea');

    // let second = bodyMain.querySelector('div').querySelectorAll('textarea')[1];

    function clicked(ev) {
        let secondTextArea = bodyMain.querySelectorAll('div')[1].querySelector('textarea');
        let target = ev.target;
        let parent = target.parentNode;
        let firstTextArea = parent.querySelector('textarea');
        if (target.tagName === 'BUTTON' && target.textContent === 'Encode and send it') {


            if (firstTextArea.value.length > 0) {
                let result = '';
                let textFromUser = firstTextArea.value;
                for (let i = 0; i < textFromUser.length; i++) {
                    let char = textFromUser[i];
                    let fromCharToCode = char.charCodeAt(0);
                    let plusToCharCode = Number(fromCharToCode) + 1;
                    let getNewCharFromCode = String.fromCharCode(plusToCharCode);
                    result += getNewCharFromCode;
                }
               // secondTextArea.removeAttribute('disabled');
                secondTextArea.value = result;
                firstTextArea.value = '';
            }
        } else if (target.tagName === 'BUTTON' && target.textContent === 'Decode and read it') {
            let result2 = '';

            for (let i = 0; i < secondTextArea.value.length; i++) {
                let char = secondTextArea.value[i];
                let fromCharToCode = char.charCodeAt(0);
                let plusToCharCode = Number(fromCharToCode) - 1;
                let getNewCharFromCode = String.fromCharCode(plusToCharCode);
                result2 += getNewCharFromCode;
            }

            firstText.value = result2;
            secondTextArea.value = '';
            //secondTextArea.setAttribute('disabled', 'true');
        }
    }
}