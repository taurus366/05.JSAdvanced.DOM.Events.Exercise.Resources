function lockedProfile() {
    const mainBody = document.getElementById('main');
    mainBody.addEventListener('click', clicked);

    function clicked(ev) {
        let userProfile = ev.target;
        if (userProfile.tagName === 'BUTTON') {
            //console.log(userProfile)
            let userLocked = userProfile.parentNode.querySelector('[value = "lock"]');
            let userUnlocked = userProfile.parentNode.querySelector('[value = "unlock"]');

            let divHiddenInfo = userProfile.parentNode.querySelector('div');

            if (userUnlocked.checked && userProfile.textContent === 'Show more') {
                divHiddenInfo.style.display = 'block';
                userProfile.textContent = 'Hide it';
                // console.log('if')
            } else if (!userLocked.checked && userUnlocked.checked && userProfile.textContent === 'Hide it') {
                // console.log('if else')
                divHiddenInfo.style.display = 'none';
                userProfile.textContent = 'Show more';
            }
        }
    }
}