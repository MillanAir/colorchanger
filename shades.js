const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//shades
const shade = [];
for(let i=1;i<=3;i++){
    shade.push(document.getElementById("shade"+i));    
}

btn.addEventListener('click', ()=>{   
    let hexColor;

    for(let i=0;i<3;i++){
        hexColor = getRandomHex();
        shade[i].style.backgroundColor = hexColor;
        shade[i].textContent = hexColor;
    }
    
    hexColor = getRandomHex();
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

const getRandomHex = () =>{
    let hexColor = '#';
    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}
const getRandomNumber = () =>{
    return Math.floor(Math.random()*hex.length);
}