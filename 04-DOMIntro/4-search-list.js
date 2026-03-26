function search() {
    let input = document.getElementById('searchText').value.toLowerCase();
    let towns = document.querySelectorAll('#towns li');

    let matches = 0;

    for (let town of towns) {
        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';

        if (town.textContent.toLowerCase().includes(input) && input !== '') {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        }
    }

    document.getElementById('result').textContent = `${matches} matches found`;
}