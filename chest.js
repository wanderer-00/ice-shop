let chest = document.getElementsByClassName('chest')[0];

// Если кит полностью заполнен одним предметом по стаку
if (enderChest.length == 1) {
    for (i = 0; i < 27; i++) {
        chest.innerHTML += `<div class="cell" style="background-image: url(img/${enderChest[0][0]});">
<div class="count">${enderChest[0][1]}</div>
</div>`;}
} else {
    for (i = 0; i < 27; i++) {
        chest.innerHTML += `<div class="cell" style="background-image: url(img/${enderChest[i][0]});">
    <div class="count">${enderChest[i][1]}</div>
</div>`;};
};