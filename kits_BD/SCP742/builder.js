let chest = document.getElementsByClassName('chest')[0];

// Если кит полностью заполнен одним предметом по стаку
if (scp742.length == 1) {
    for (i = 0; i < 27; i++) {
        chest.innerHTML += `<div class="cell" style="background-image: url(../../img/${scp742[0][0]});">
<div class="count">${scp742[0][1]}</div>
</div>`;}
} else {
    for (i = 0; i < 27; i++) {
        chest.innerHTML += `<div class="cell" style="background-image: url(../../img/${scp742[i][0]});">
    <div class="count">${scp742[i][1]}</div>
</div>`;};
};