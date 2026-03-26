function solve() {
    let input = document.getElementById('searchField').value.toLowerCase();
    let rows = document.querySelectorAll('tbody tr');

    for (let row of rows) {
        row.classList.remove('select');
    }

    for (let row of rows) {
        let cells = row.querySelectorAll('td');
        let found = false;

        for (let cell of cells) {
            if (cell.textContent.toLowerCase().includes(input)) {
                found = true;
                break;
            }
        }

        if (found && input !== '') {
            row.classList.add('select');
        }
    }

    document.getElementById('searchField').value = '';
}