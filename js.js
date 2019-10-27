let prix = document.getElementById('text');
let button = document.getElementById('button');
let p = document.getElementById('p');


function calcul() {  
    p.innerHTML = 'La TVA est de' + " " + (prix.value) / 100 * 20 + " €" ;
}

button.addEventListener("click", (e) => {
    e.preventDefault;
    calcul();
});

