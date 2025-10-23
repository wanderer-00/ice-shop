let chest = document.getElementsByClassName('chest')[0];

for(i=0; i<27; i++){
    chest.innerHTML += `
<div class="cell"></div>
    `;
}