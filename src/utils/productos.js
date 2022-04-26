export const products = [
    {
        id: 1,
        nombre: 'Nike Air Force 1 React',
        precio: '129,99',
        imagen: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e92a85ee-7b5a-4c84-8e98-fcdee92eab72/air-force-1-react-zapatillas-rm9gw3.png',
        category: 'air-force',
        descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore numquam a ullam rem. Perspiciatis quod provident fuga quidem.',
        stock: 5,

    },
    {
        id: 3,
        nombre: 'Air Jordan 1 Low',
        precio: '109,99',
        imagen: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f94e20ea-4f1c-4eea-8276-248d42409bf4/air-jordan-1-low-zapatillas-jSGqgN.png',
        category: 'jordan',
        descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore numquam a ullam rem. Perspiciatis quod provident fuga quidem.',
        stock: 5,
    },
    {
        id: 4,
        nombre: 'Nike Air Force 1 React',
        precio: '129,99',
        imagen: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e92a85ee-7b5a-4c84-8e98-fcdee92eab72/air-force-1-react-zapatillas-rm9gw3.png',
        category: 'air-force',
        descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore numquam a ullam rem. Perspiciatis quod provident fuga quidem.',
        stock: 5,
    },
    {
        id: 5,
        nombre: 'Air Jordan 1 Low',
        precio: '109,99',
        imagen: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/f94e20ea-4f1c-4eea-8276-248d42409bf4/air-jordan-1-low-zapatillas-jSGqgN.png',
        category: 'jordan',
        descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore numquam a ullam rem. Perspiciatis quod provident fuga quidem.',
        stock: 5,
    },
    {
        id: 6,
        nombre: 'Air Max 2021',
        precio: '179,99',
        imagen: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/3d530758-b564-4460-91ee-f8d51b8dc109/air-max-2021.jpg',
        category: 'air-max',
        descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore numquam a ullam rem. Perspiciatis quod provident fuga quidem.',
        stock: 5,
    },
    {
        id: 2,
        nombre: 'Air Max 2021',
        precio: '179,99',
        imagen: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_600,c_limit/3d530758-b564-4460-91ee-f8d51b8dc109/air-max-2021.jpg',
        category: 'air-max',
        descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore numquam a ullam rem. Perspiciatis quod provident fuga quidem.',
        stock: 5,
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}