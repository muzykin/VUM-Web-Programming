function lockedProfile() {
    let buttons = document.querySelectorAll('button');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let profile = btn.parentElement;
            let isLocked = profile.querySelector('input[value="lock"]').checked;
            let hiddenDiv = profile.querySelector('div');

            if (!isLocked) {
                if (btn.textContent === 'Show more') {
                    hiddenDiv.style.display = 'block';
                    btn.textContent = 'Hide it';
                } else {
                    hiddenDiv.style.display = 'none';
                    btn.textContent = 'Show more';
                }
            }
        });
    });
}