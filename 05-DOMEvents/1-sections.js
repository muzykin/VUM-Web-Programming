function create(words) {
    let content = document.getElementById('content');

    for (let text of words) {
        let div = document.createElement('div');
        let p = document.createElement('p');

        p.textContent = text;
        p.style.display = 'none';

        div.appendChild(p);

        div.addEventListener('click', () => {
            p.style.display = 'block';
        });

        content.appendChild(div);
    }
}