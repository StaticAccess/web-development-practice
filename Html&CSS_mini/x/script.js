const grid = document.getElementById('grid');
const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
let selectedTiles = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createGrid() {
    shuffleArray(values);
    grid.innerHTML = '';

    for (const value of values) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.dataset.value = value;
        div.textContent = '?';
        div.addEventListener('click', handleTileClick);
        grid.appendChild(div);
    }
}

function handleTileClick(event) {
    const tile = event.target;

    if (selectedTiles.length < 2 && !tile.classList.contains('revealed')) {
        selectedTiles.push(tile);
        tile.textContent = tile.dataset.value;
        tile.classList.add('revealed');
    }

    if (selectedTiles.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [tile1, tile2] = selectedTiles;

    if (tile1.dataset.value === tile2.dataset.value) {
        tile1.classList.add('matched');
        tile2.classList.add('matched');
    } else {
        tile1.textContent = '?';
        tile2.textContent = '?';
    }

    selectedTiles = [];
}

createGrid();
