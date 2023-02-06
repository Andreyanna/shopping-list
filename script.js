const inputLine = document.querySelector('#input');
const itemContainer = document.querySelector('#items')

inputLine.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const newItemText = inputLine.value;
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        });
        if (newItemText != '') {
            itemContainer.append(newItem);
        }
        inputLine.value = '';
    }
});