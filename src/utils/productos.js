export const products = [
    {
        id: 1,
        nombre: 'Nike Air Force 1 React',
        precio: '129,99',
        imagen: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e92a85ee-7b5a-4c84-8e98-fcdee92eab72/air-force-1-react-zapatillas-rm9gw3.png'

    },
    {
        id: 2,
        nombre: 'Air Jordan 1 Low',
        precio: '109,99',
        imagen: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f94e20ea-4f1c-4eea-8276-248d42409bf4/air-jordan-1-low-zapatillas-jSGqgN.png'
    },
    {
        id: 3,
        nombre: 'Nike Air Force 1 React',
        precio: '129,99',
        imagen: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e92a85ee-7b5a-4c84-8e98-fcdee92eab72/air-force-1-react-zapatillas-rm9gw3.png'
    },
    {
        id: 4,
        nombre: 'Air Jordan 1 Low',
        precio: '109,99',
        imagen: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f94e20ea-4f1c-4eea-8276-248d42409bf4/air-jordan-1-low-zapatillas-jSGqgN.png'
    }
];

export const product = {
    id: 1,
    nombre: 'Nike Air Force 1 React',
    precio: '129,99',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, fugit distinctio facere, iure commodi aperiam est assumenda voluptas quis soluta, itaque porro at velit quia.',
    imagen: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e92a85ee-7b5a-4c84-8e98-fcdee92eab72/air-force-1-react-zapatillas-rm9gw3.png'

};

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

export const getProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
}