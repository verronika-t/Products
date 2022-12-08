const lorem = ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

const productButtons = document.getElementsByClassName('product-btn');
const closeProductBtn = document.getElementById('close-btn');
const buyButton = document.getElementById('buy-btn');

const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay')

let products = [
    {
        id: 1,
        name: 'Product 1',
        sku: '278392333',
        rating: 3,
        about: lorem

    } ,
    {
        id: 2,
        name: 'Product 2',
        sku: '278392399',
        rating: 1,
        about: lorem

    } ,
    {
        id: 3,
        name: 'Product 3',
        sku: '278392393',
        rating: 3,
        about: lorem
    } ,
    {
        id: 4,
        name: 'Product 4',
        sku: '278392396',
        rating: 3,
        about: lorem
    } ,
    {
        id: 5,
        name: "Product 5" ,
        sku: '278392394' ,
        rating: 5,
        about: lorem
    } ,
    {
        id: 6,
        name: "Product 6" ,
        sku: '278392395' ,
        rating: 2,
        about: lorem
    }

]


const titleModal = document.getElementById('title');
const ratingModal = document.getElementById('rating');
const skuModal = document.getElementById('sku');
const textModal = document.getElementById('text');


const showModal = (value) =>  {
if (modal == null) return;
modal.classList.add('active');
overlay.classList.add('active');

let product = products.find(p => p.id == value);

titleModal.innerText = product.name;
addStarRating(product.rating);
skuModal.innerText = 'SKU: ' + product.sku;
textModal.innerHTML = product.about;
}

const addStarRating = (count) =>  {
    for (let i = 0; i < count; i++) {
        ratingModal.children[i].classList.add('on');
    }
}

const removeStarRating = () => {
    for (let star of ratingModal.children) {
        star.classList.remove('on');
    }
}

const closeModal = () => {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
    removeStarRating();
}


for (let button of productButtons) {
    button.addEventListener('click', function() {
        showModal(button.value);
    } )
}


closeProductBtn.onclick = closeModal;
buyButton.onclick = closeModal;