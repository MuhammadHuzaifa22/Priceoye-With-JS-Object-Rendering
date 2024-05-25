const phones = [
    {
        brand: 'Wireless Earbuds',
        model: 'Ronin R-520',    
        price: 4349,
        Image: src = "./Assets/Images/ronin R-50.webp",
        line : '8,000'
    },
    {
        brand: 'Haylou Earbuds',
        model: 'Gt1 2023',
        price: 4699,
        Image: src = "./Assets/Images/hay2.webp",
        line : '8,000'
    },
    {
        brand: 'Transparent Earbuds',
        model: 'Air 31 TWS',
        price: 1199,
        Image: src = "./Assets/Images/hay3.webp",
        line : '4,000'
    },
    {
        brand: 'HAYLOU True Wireless Earphones',
        model: 'X1 2023',
        price: 4399,
        Image: src = "./Assets/Images/hay4.webp",
        line : '10,000'
    },
    {
        brand: 'Wireless Bluetooth Earbuds',
        model: 'M10 TWS',
        price: 999,
        Image: src = "./Assets/Images/hay6.webp",
        line : '2,499'
    },
    {
        brand: 'Wireless Earbuds',
        model: 'Dany Airdots 110',
        price: 3149,
        Image: src = "./Assets/Images/hay7.webp",
        line : '4,000'
    },
    {
        brand: 'Zero Rover Wireless Earbuds',
        model: ' ',
        price: 1599,
        Image: src = "./Assets/Images/hay8.webp",
        line : '10,000'
    },
    {
        brand: 'Ronin Wireless Earbuds',
        model: 'R-50',
        price: 4499,
        Image: src = "./Assets/Images/hay9.webp",
        line: 5499,
    },

]

let arr;
let items = JSON.parse(localStorage.getItem('cartItems'));
if(items === null){
    arr = [];
}else{
    arr = items;
    console.log(arr)
}

const div = document.querySelector('.products');
function renderItems (){
    for(let i = 0; i < phones.length; i++){
        div.innerHTML += `
        <div class="Card  text-dark border-light forCard" style="width: 15rem;">
            <div class="card-body">
            <div class="image_sec">
            <img src="${phones[i].Image}">
            </div>
                <h6 class="card-title">${phones[i].brand +' '+ phones[i].model}</h6>
                <div class="forP">
                <p class="card-text" style="font-size:14px;font-weight:400">Rs <span style="font-size:17px;font-weight:600">${phones[i].price}</span></p>
                </div>
                <div class="forBut_p">
                <p>Rs <span id="line_T">${phones[i].line}</span></p>
                </div>
                <div class="forButton">
                <button onclick="addtocart(${i})" class="btn btn-primary" id="aDD">Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
                </div>
                
            </div>
        </div>
        `
    }
}

renderItems()

function addtocart(index){
    if(arr.includes(phones[index])){
        console.log('item included');
        phones[index].quantity += 1;
    }else{
        phones[index].quantity = 1;
        arr.push(phones[index]);
    }
    console.log(arr);
}

function gotocart(){
    console.log('cart');
    localStorage.setItem('cartItems' , JSON.stringify(arr));
    window.location = 'cart.html';
}





// ..............................................................................
const Newphones = [
    {
        brand: 'Evoulution Smart Watch',
        model: 'Dany',    
        price: 14999,
        Image: src = "./Assets/Images/mb1.webp",
        line : '29,999'
    },
    {
        brand: 'SYSKA Astro Round Dial Smart Watch',
        model: 'SW280',
        price: 3799,
        Image: src = "./Assets/Images/mb1.webp",
        line : '7,500'
    },
    {
        brand: 'Haylou Max Calling Smart Watch',
        model: '',   
        price: 8599,
        Image: src = "./Assets/Images/mb1.webp",
        line : '14,000'
    },
    {
        brand: 'Hottu Smart Watch',
        model: 'Rabitt800',
        price: 2799,
        Image: src = "./Assets/Images/mb1.webp",
        line : '6,000'
    },
    {
        brand: 'Ultra Bluetooth Calling Smart Watch',
        model: 'X8',
        price: 4169,
        Image: src = "./Assets/Images/mb1.webp",
        line : '5,999'
    },
    {
        brand: 'Ultra Smart Watch',
        model: 'T800',
        price: 1549,
        Image: src = "./Assets/Images/mb1.webp",
        line : '3,299'
    },
    {
        brand: 'Sveston Nitro Smartwatch',
        model: ' ',
        price: 9299,
        Image: src = "./Assets/Images/mb1.webp",
        line : '15,000'
    },
    {
        brand: 'Kieslect Calling Smart Watch With Dual Straps',
        model: 'Ks Pro',
        price: 15099,
        Image: src = "./Assets/Images/mb1.webp",
        line: '23,000',
    },

]









const Newdiv = document.querySelector('.NewProducts');
function AgainrenderItems (){
    for(let i = 0; i < Newphones.length; i++){
        Newdiv.innerHTML += `
        <div class="Card  text-dark border-light forCard" style="width: 15rem;">
            <div class="card-body">
            <div class="image_sec">
            <img src="${Newphones[i].Image}">
            </div>
                <h6 class="card-title">${Newphones[i].brand +' '+ Newphones[i].model}</h6>
                <div class="forP">
                <p class="card-text" style="font-size:14px;font-weight:400">Rs <span style="font-size:17px;font-weight:600">${Newphones[i].price}</span></p>
                </div>
                <div class="forBut_p">
                <p>Rs <span id="line_T">${Newphones[i].line}</span></p>
                </div>
                <div class="forButton">
                <button onclick="addtocart(${i})" class="btn btn-primary" id="aDD">Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
                </div>
                
            </div>
        </div>
        `
    }
}

AgainrenderItems()

function addtocart(index){
    if(arr.includes(Newphones[index])){
        console.log('item included');
        Newphones[index].quantity += 1;
    }else{
        Newphones[index].quantity = 1;
        arr.push(Newphones[index]);
    }
    console.log(arr);
}

function gotocart(){
    console.log('cart');
    localStorage.setItem('cartItems' , JSON.stringify(arr));
    window.location = 'cart.html';
}



// //////////////////////////////////////////////////////////////////////////////////////////






const Nphones = [
    {
        brand: 'Samsung',
        model: 'Galaxy A05s',    
        price: 42299,
        Image: src = "./Assets/Images/mb1.webp",
        line : '29,999'
    },
    {
        brand: 'Oppo',
        model: 'Reno 11 5G',
        price: 118699,
        Image: src = "./Assets/Images/mb2.webp",
        line : '7,500'
    },
    {
        brand: 'Motorola',
        model: 'Moto G54 5G',
        price: 43499,
        Image: src = "./Assets/Images/mb3.webp",
        line : '14,000'
    },
    {
        brand: 'Vivo 5G',
        model: 'V30',
        price: 125199,
        Image: src = "./Assets/Images/mb4.webp",
        line : '6,000'
    },
    {
        brand: 'Infinix',
        model: 'Note 40',
        price: 49499,
        Image: src = "./Assets/Images/mb5.webp",
        line : '5,999'
    },
    {
        brand: 'Honor',
        model: 'X7b',
        price: 56999,
        Image: src = "./Assets/Images/mb6.webp",
        line : '3,299'
    },
    {
        brand: 'Xiaomi',
        model: 'Redmi 12',
        price: 29699,
        Image: src = "./Assets/Images/mb7.webp",
        line : '15,000'
    },
    {
        brand: 'Infinix',
        model: 'Note 40 Pro',
        price: 69999,
        Image: src = "./Assets/Images/mb8.webp",
        line: '23,000',
    },

]









const Ndiv = document.querySelector('.NeWProducts');
function Again1renderItems (){
    for(let i = 0; i < Nphones.length; i++){
        Ndiv.innerHTML += `
        <div class="Card  text-dark border-light forCard" style="width: 15rem;">
            <div class="card-body">
            <div class="image_sec">
            <img src="${Nphones[i].Image}">
            </div>
                <h6 class="card-title">${Nphones[i].brand +' '+ Nphones[i].model}</h6>
                <div class="forP">
                <p class="card-text" style="font-size:14px;font-weight:400">Rs <span style="font-size:17px;font-weight:600">${Nphones[i].price}</span></p>
                </div>
                <div class="forBut_p">
                <p>Rs <span id="line_T">${Nphones[i].line}</span></p>
                </div>
                <div class="forButton">
                <button onclick="addtocart(${i})" class="btn btn-primary" id="aDD">Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
                </div>
                
            </div>
        </div>
        `
    }
}

Again1renderItems()






function addtocart(index){
    if(arr.includes(Nphones[index])){
        console.log('item included');
        Nphones[index].quantity += 1;
    }else{
        Nphones[index].quantity = 1;
        arr.push(Nphones[index]);
    }
    console.log(arr);
}

function gotocart(){
    console.log('cart');
    localStorage.setItem('cartItems' , JSON.stringify(arr));
    window.location = 'cart.html';
}
