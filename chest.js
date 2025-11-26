let wrapper = document.getElementsByTagName('main')[0].getElementsByClassName('wrapper')[0];

function render(KIT) {
    // очистка wrapper
    wrapper.innerHTML = "";
    
    // кол-во китов
    let builderKITCount = KIT.length;
    console.log('Кол-во китов:', builderKITCount, 'шт');

    // цикл создания китов
    for (i = 0; i < builderKITCount; i++) {

        // создание контейнера честа
        let chest = document.createElement('div');
        chest.className = 'chest';

    // цикл создания ячеек
        // буфер ячеек предметов одного честа
        let cash = '';

        if(KIT[i].length == 1) {

            // если чест состоит из множества одинаковых предметов
            for (a = 0; a < 27; a++) {
                cash += `<div class="cell" style="background-image: url(img/png/${KIT[i][0][0]});"><div class="count">${KIT[i][0][1]}</div></div>`;
            }

        } else {

            // если чест состоит из множества разных предметов
            for (a = 0; a < 27; a++) {
                // если чест не полностью заполнен предметами, то заполнить пустыми ячейками
                if( KIT[i][a][1] == 0){
                    cash += `<div class="cell"></div>`;
                } else {
                    cash += `<div class="cell" style="background-image: url(img/png/${KIT[i][a][0]});"><div class="count">${KIT[i][a][1]}</div></div>`;
                }            
            }
        };

        // вставка ячеек предметов в чест
        chest.innerHTML = cash;

        // добавление честа на страницу сайта
        wrapper.appendChild(chest);
    };   
};

render(collection);