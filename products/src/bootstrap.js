import faker from 'faker';

// let products = '';

// for(let i=0;i<5;i++){
//     const name = faker.commerce.productName();
//     products += `<div>${name}</div>`
// }

// document.querySelector('#dev-products').innerHTML = products;

//Context/Situation #1
//we are running this file in development mode in isolation
//we are using our local index.html file
//which definitely has an element with id 'dev-products'
//we want to immediately render our app into that element

//Context/Situation #2
//we are running this file in development mode/production mode
//through the container app
//No Guarantee that an element with id 'dev-products' exists
//we do not want to try to immediately render our app


const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    el.innerHTML = products;
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products');

    //assuming our container does not have an element with id 'dev-products'
    if(el){
        //we are probably running in isolation
        mount(el);
    }
}

export { mount };