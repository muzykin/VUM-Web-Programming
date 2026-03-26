function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', () => convert('days'));
    document.getElementById('hoursBtn').addEventListener('click', () => convert('hours'));
    document.getElementById('minutesBtn').addEventListener('click', () => convert('minutes'));
    document.getElementById('secondsBtn').addEventListener('click', () => convert('seconds'));

    function convert(unit) {
        let days, hours, minutes, seconds;

        if (unit === 'days') {
            days = Number(document.getElementById('days').value);
        } else if (unit === 'hours') {
            hours = Number(document.getElementById('hours').value);
            days = hours / 24;
        } else if (unit === 'minutes') {
            minutes = Number(document.getElementById('minutes').value);
            days = minutes / 1440;
        } else if (unit === 'seconds') {
            seconds = Number(document.getElementById('seconds').value);
            days = seconds / 86400;
        }

        document.getElementById('days').value = days;
        document.getElementById('hours').value = days * 24;
        document.getElementById('minutes').value = days * 1440;
        document.getElementById('seconds').value = days * 86400;
    }
}