console.log($('body'));

let p = $('#test');
let div = $('.my-class');
let ul = $('ul');


console.log(p);
console.log(div);
console.log(ul);

console.log(p.text());
p.text('new text');

$('input').attr('placeholder', 'placeholder text');

div.prepend('<p>prepended paragraph</p>');
div.append('<p>appended paragraph</p>');
div.before('<p>paragraph before div</p>');
div.after('<p>paragraph after div</p>');

//div.empty(); //removes all items inside
//ul.remove(); //removes the item and all children

$('input').hide();
setTimeout(() => $('input').show(),2000);



//////////ajax

$.get('https://reqres.in/api/users/2', (data) => console.log(data));

$.post('https://reqres.in/api/users/2',{
    name: 'Camille',
    job: 'front end developer'

}, (data) => console.log(data) );

const url = 'https://pokeapi.co/api/v2/pokemon'

let ids = [25,59,149,151,94];
let pokemon = [];

for (let id of ids) {
    fetch(`${url}/${id}`)
        .then(res => res.json())
        .then(data => {
            let newObj = {
                name: data.name,
                id: data.id,
                image: data.sprites.front_default,
                type: data.types[0].type.name
            }
            pokemon.push(newObj);
        });
}

console.log(pokemon);

const show = document.getElementById('show');
console.log(show);

show.addEventListener('click', ()=>{

    let field = document.createElement('div');
    field.setAttribute('class','field');

    for (let p of pokemon) {
        let card = document.createElement('div');
        let img = document.createElement('img');
        let info = document.createElement('h2');

        img.src = p.image;
        img.setAttribute('class','pokeImg');

        info.innerText = `${p.id} ${p.name}`;

        card.append(img,info);
        card.setAttribute('class',`card ${p.type}`);

        field.append(card);
    }

    document.body.append(field);
})

/*

    getElementById
    createElement
    innerText
    innerHTML = "";
    setAttribute
    img.src = ""
    img.style.
    append
    addEventListener(event, function);
    for, for of, forEach


    ***********
    Grab/Create elements
    Update/Modify elements
    Append that element (probably to a container)
*/
a