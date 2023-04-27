document.getElementById('json-upload').addEventListener('change', loadJSONFromFile);
document.getElementById('json-select').addEventListener('change', loadJSONFromDropdown);

function loadJSONFromFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const json = JSON.parse(e.target.result);
        generateCard(json);
    };

    reader.readAsText(file);
}

function loadJSONFromDropdown(event) {
    const selectedFile = event.target.value;
    if (selectedFile) {
        fetch(selectedFile)
            .then((response) => response.json())
            .then((json) => generateCard(json));
    }
}

function loadJSON(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const json = JSON.parse(e.target.result);
        generateCard(json);
    };

    reader.readAsText(file);
}

function generateCard(json) {
    document.getElementById('card-title').innerText = json.name;
    document.getElementById('card-image').style.backgroundImage = `url(${json.imageUrl})`;
    document.getElementById('card-type').innerText = json.type;
    document.getElementById('card-mana-cost').innerText = json.manaCost;
    document.getElementById('card-text').innerText = json.text;
    document.getElementById('card-flavor-text').innerText = json.flavorText;
    document.getElementById('card-power').innerText = json.power;
    document.getElementById('card-toughness').innerText = json.toughness;

    const cardElement = document.getElementById('mtg-card');
    cardElement.style.borderColor = getColorFromIdentity(json.colorIdentity[0]);
}

function getColorFromIdentity(color) {
    switch (color) {
        case 'W':
            return '#EFD7AA';
        case 'U':
            return '#AAB9E8';
        case 'B':
            return '#C3BEBE';
        case 'R':
            return '#E89B9B';
        case 'G':
            return '#A3C7AC';
        default:
            return '#ccc';
    }
}
