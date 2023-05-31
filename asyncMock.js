const products = [
    {
        id: '1',
        name: 'PlayStation 5',
        price: '$402.258',
        category: 'Consolas y Juegos',
        img: 'https://www.showplacerents.com/images2/lps/xbox-ps5-reserve/ps5.png',
        stock: '10',
        description: 'Descripción de Playstation 5'
    },

    {
        id: '2',
        name: 'Intel Core i9-13900K 3 GHz Box',
        price: '$598.000',
        category: 'Componentes de PC',
        img: 'https://i.blogs.es/43e64a/captura-de-pantalla-2020-06-04-a-las-9.26.43/original.png',
        stock: '20',
        description: 'Descripción de Intel Core 9'
    },

    {
        id: '3',
        name: 'Silla de escritorio Vonne SV-G0 gamer ergonómica negra y blanca',
        price: '$69.369',
        category: 'Sillas Gamer',
        img: 'https://w7.pngwing.com/pngs/882/179/png-transparent-red-white-gamer-black-chair-chair-blue-angle-white-thumbnail.png',
        stock: '35',
        description: 'Descripción de Silla Gamer',
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}