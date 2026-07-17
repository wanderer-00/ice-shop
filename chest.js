let wrapper = document.getElementsByTagName('main')[0].getElementsByClassName('wrapper')[0];

function render(thisBtn, KIT) {
    // 1. Находим все кнопки с общим классом
    const allButtons = document.querySelectorAll('.tabBtn');

    // 2. Перебираем их и удаляем ID у каждой
    allButtons.forEach(button => {
        button.removeAttribute('id'); // Полностью удаляет атрибут id из HTML
    });

    // 3. окрашиваем вкладку категории
    thisBtn.id = 'select';

    // очистка wrapper
    wrapper.innerHTML = "";
    
    // кол-во китов
    let builderKITCount = KIT.length;
    console.log('Кол-во китов:', builderKITCount, 'шт');

    // цикл создания китов
    for (i = 0; i < builderKITCount; i++) {

        let NAME = KIT[i].NAME;
        let PRIC = KIT[i].PRIC;
        let NOTE = KIT[i].NOTE;

        // создание контейнера честа
        let chest = document.createElement('div');
        chest.className = 'chest';

    // цикл создания ячеек
        // буфер ячеек предметов одного честа
        let cash = '';

        if(KIT[i].MENU.length == 1) {

            // если чест состоит из множества одинаковых предметов
            for (a = 0; a < 27; a++) {
                cash += `<div class="cell" style="background-image: url(img/item/${KIT[i].MENU[0][0]}.png);"><div class="count">${KIT[i].MENU[0][1]}</div></div>`;
            }

        } else {

            // если чест состоит из множества разных предметов
            for (a = 0; a < 27; a++) {
                // если чест не полностью заполнен предметами, то заполнить пустыми ячейками
                if( KIT[i].MENU[a][1] == 0){
                    cash += `<div class="cell"></div>`;
                } else {
                    cash += `<div class="cell" style="background-image: url(img/item/${KIT[i].MENU[a][0]}.png);"><div class="count">${KIT[i].MENU[a][1]}</div></div>`;
                }            
            }
        };

        // вставка ячеек предметов в чест
        chest.innerHTML = cash;

        // добавление честа на страницу сайта
        wrapper.appendChild(chest);

        wrapper.innerHTML += `
        <div class="info">
            <h2 class="NAME">${NAME}</h2>
            <h1 class="PRIC">${PRIC} &#8381;</h1>
            <p class="NOTE">${NOTE}</p>
        `;
    };   
};

// первая инициализация
let firstBtn = document.getElementById('active');
render(firstBtn, popular);