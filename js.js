
let base = [
    {id: 1,  img: './img/image 1.png', title: 'Syltherine', subtitle: 'Stylish cafe chair', titlee: '2.500.000'},
    {id: 2,  img: './img/image 2.png', title: 'Leviosa', subtitle: 'Stylish cafe chair', titlee: '2.500.000'},
    {id: 3,  img: './img/image 3.png', title: 'Lolito', subtitle: 'Luxury big sofa', titlee: '7.000.000' },
    {id: 4,  img: './img/image 4.png', title: 'Respira', subtitle: 'Minimalist fan', titlee: '500.000' },
    {id: 5,  img: './img/image 9.png', title: 'Grifo', subtitle: 'Night lamp', titlee: '1.500.000'},
    {id: 6,  img: './img/image 6.png', title: 'Muggo', subtitle: 'Small mug', titlee: '150.000' },
    {id: 7,  img: './img/image 7.png', title: 'Pingky', subtitle: 'Cute bed set', titlee: '7.000.000' },
    {id: 8,  img: './img/image 8.png', title: 'Potty', subtitle: 'Minimalist flower pot', titlee: '2.500.000' },
]



let row = document.querySelector('.row')

const addCardsInRow = () => {
    base.forEach((item) =>{
        row.innerHTML += `<div class="card" id="${item.id}">
                         <img class="card__img" src="./${item.img}" alt="${item.subtitle}">
                         <h2 calss="card__title">${item.title}</h2>
                         <p class="card__subtitle">${item.subtitle}</p>
                         <h2 calss="card__title">${item.titlee}</h2>
                         <button class = 'btns'>remove</button>
                         </div>`
    })
     
}
addCardsInRow()

const btns = document.getElementsByClassName('btn')
addEventListener('click', function() {
    row.removeChild(row.firstChild)
})