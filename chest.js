let wrapper = document.getElementsByTagName('main')[0].getElementsByClassName('wrapper')[0];


// кол-во китов
let builderKITCount = builderKIT.length;
console.log('Строительный кит:', builderKITCount, 'шт');

// цикл китов
for (i = 0; i < builderKITCount; i++) {
    let chest = document.createElement('div');
    chest.className = 'chest';
    
    // цикл ячеек
    let cash = ''; // буфер всех предметов шалкера
    if(builderKIT[i].length == 1) {
        for (a = 0; a < 27; a++) {
            cash += `<div class="cell" style="background-image: url(img/png/${builderKIT[i][0][0]});"><div class="count">${builderKIT[i][0][1]}</div></div>`;
        };
    } else {
        for (a = 0; a < 27; a++) {
            cash += `<div class="cell" style="background-image: url(img/png/${builderKIT[i][a][0]});"><div class="count">${builderKIT[i][a][1]}</div></div>`;
        };
    };
    
    chest.innerHTML = cash;

    wrapper.appendChild(chest);
};