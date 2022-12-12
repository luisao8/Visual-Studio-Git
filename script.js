let boton = document.querySelector('#buttonClick');
boton.addEventListener('click', startSearch);
let url = "https://pokeapi.co/api/v2/pokemon/";

let height = 0;
let list = document.querySelector('#item-list');
let form = document.querySelector('#form1');
let value = "";

let health = '';
let attack = '';
let defense = '';
let specialAttack = '';
let specialDefense = '';
let speed = '';



function startSearch () {
    value = form.value;
    value = value.toLowerCase();
    url = url + value;
    console.log(url)
    ApiSearchImage (url);
}


function ApiSearchImage () {
    fetch(url).then( (response) => response.json()).then( (data) => {
        

        let image =  data.sprites.front_default;
        console.log(image)

        let li = document.createElement('li');
        let img = document.createElement('img');
        img.style.width = "150px";
        img.src = image;
    

        list.appendChild(img);
        img.style.marginTop = '30px';

        ApiSearchSize ();
        
           
    })
}


function ApiSearchSize () {
    fetch(url).then( (response) => response.json()).then( (data) => {
        div = document.createElement('hr');
        list.appendChild(div);
        sectTitle = document.createElement('h3');
        sectTitle.innerText = 'Size:';
        list.appendChild(sectTitle);

        height = data.height;
        height = height + '0';
        let li = document.createElement('li');
        li.innerText = `Height: ${height} cm's.`
        list.appendChild(li);

        let weight = data.weight;
        weight = Number(weight);
        weight = weight * 100;
        weight = weight / 1000;
        let li2 = document.createElement('li');
        li2.innerText = `Weight: ${weight} kg's.`
        list.appendChild(li2);
        ApiSearchStats ();
           
    })
}


function ApiSearchStats () {
    fetch(url).then( (response) => response.json()).then( (data) => {
        
        div = document.createElement('hr');
        list.appendChild(div);
        sectTitle = document.createElement('h3');
        sectTitle.innerText = 'Stats:';
        list.appendChild(sectTitle);


        stats = data.stats;

        let health = stats[0].base_stat;
        let li3 = document.createElement('li');
        li3.innerText = `Health: ${health} px.`
        list.appendChild(li3);

        let attack = stats[1].base_stat;
        let li4 = document.createElement('li');
        li4.innerText = `Attack: ${attack} px.`
        list.appendChild(li4);

        let defense = stats[2].base_stat;
        let li5 = document.createElement('li');
        li5.innerText = `Defense: ${defense} px.`
        list.appendChild(li5);

        let specialAttack = stats[3].base_stat;
        let li6 = document.createElement('li');
        li6.innerText = `Special Attack: ${specialAttack} px.`
        list.appendChild(li6);

        let specialDefense = stats[4].base_stat;
        let li7 = document.createElement('li');
        li7.innerText = `Special Defense: ${specialDefense} px.`
        list.appendChild(li7);

        let speed = stats[5].base_stat;
        let li8 = document.createElement('li');
        li8.innerText = `Speed: ${speed} px.`
        list.appendChild(li8);
        li8.style.marginBottom = '100px';
        url = '';


        
    })

}




// function ApiSearchImage () {
//     fetch(url).then( (response) => response.json()).then( (data) => {
//         console.log(data)
        
           
//     })
// }