const inputLine = document.querySelector('#input');
const itemContainer = document.querySelector('#items')

inputLine.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const newItemText = inputLine.value;
        const newItem = document.createElement('li');
        /*newItem.classList.add('new-items'); это лишнее наверно */
        newItem.textContent = newItemText;
        const eachNewItem = document.querySelectorAll('li');
        for (let task of eachNewItem) {
            task.addEventListener('click', function() {
                task.classList.toggle('done');
            })
        };
        if (newItemText != '') {
            itemContainer.append(newItem);
        }
        inputLine.value = '';
        /* пробовала вставить эту конструкцию if в разные места - работает только тут, но по-прежнему коряво - через пункт. Закономерность отследить не удалось и найти ошибку тоже пока для меня трудно. Надеюсь получить обьяснение от специалиста ) */
    }
});


/* const eachNewItem = document.querySelectorAll('.new-items');
for (let task of eachNewItem) {
    task.addEventListener('click', function() {
        task.classList.toggle('done');
    })
}; /* а почему не может работать за пределами функции event?  Ведь она отвечает за то, чтобы появлялись li. А клики на них - отдельные уже действия, идут следом. Я так изначально рассуждала и поэтому присвоила им класс. Хочется узнать, почему такая логика неверна, почему нужно все внутрь именно той функции вставлять */