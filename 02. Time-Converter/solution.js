function attachEventsListeners() {

    const main = document.querySelector('main');
    main.addEventListener('click', clicked);

    let day = document.querySelector('#days');
    let hour = document.querySelector('#hours');
    let minute = document.querySelector('#minutes');
    let second = document.querySelector('#seconds');

    function clicked(ev) {
        const button = ev.target;
        const parent = ev.target.parentNode;

        let input = parent.querySelector('input');
        const buttonNumber = Number(input.value);
        switch (button.getAttribute('id')) {
            case 'daysBtn':
                //day.value = buttonNumber / 24);
                hour.value = day.value * 24;
                minute.value = hour.value * 60;
                second.value = minute.value * 60;
                break;
            case 'hoursBtn':
                // hour.value = day.value * 24);
                day.value = hour.value / 24;
                minute.value = hour.value * 60;
                second.value = minute.value * 60;
                break;
            case 'secondsBtn':
                minute.value = second.value / 60;
                hour.value = minute.value * 0.016667;
                day.value = hour.value / 24;
                // second.value = minute.value * 60);
                break;
            case 'minutesBtn':
                // minute.value = second.value / 60);
                hour.value = minute.value * 0.016667;
                day.value = hour.value / 24;
                second.value = minute.value * 60;
                break;
        }


    }


}