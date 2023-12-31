import { createStore } from "vuex";

export default createStore({
    state: {
        productsList: [
            {
                title: 'iPhone 13',
                image: 'https://content.rozetka.com.ua/goods/images/big/259416456.jpg',
                link: 'https://rozetka.com.ua/ua/apple-iphone-13-256gb-green/p337936078/',
                price: 42000,
                oldPrice: 48000,
                category: 'phone',
            },
            {
                title: 'Samsung Galaxy S21',
                image: 'https://content2.rozetka.com.ua/goods/images/big/245917791.jpg',
                link: 'https://rozetka.com.ua/ua/samsung-sm-g990blggsek/p331591759/',
                price: 21200,
                oldPrice: 24999,
                category: 'phone',
            },
            {
                title: 'Google Pixel 6',
                image: 'https://content.rozetka.com.ua/goods/images/big/285442964.jpg',
                link: 'https://rozetka.com.ua/ua/353539176/p353539176/',
                price: 13835,
                oldPrice: 15000,
                category: 'phone',
            },
            {
                title: 'OnePlus 9 Pro',
                image: 'https://content2.rozetka.com.ua/goods/images/big/279921366.jpg',
                link: 'https://rozetka.com.ua/ua/327407041/p327407041/',
                price: 23408,
                oldPrice: 24800,
                category: 'phone',
            },
            {
                title: 'LG OLED 4K TV',
                image: 'https://content.rozetka.com.ua/goods/images/big/351025401.jpg',
                link: 'https://rozetka.com.ua/ua/lg_oled55c36lc/p386410494/',
                price: 72999.99,
                oldPrice: 84000,
                category: 'tv',
            },
            {
                title: 'Sony Bravia 4K TV',
                image: 'https://content2.rozetka.com.ua/goods/images/big/374384849.jpg',
                link: 'https://rozetka.com.ua/ua/400986825/p400986825/',
                price: 80113,
                oldPrice: 84050,
                category: 'tv',
            },
            {
                title: 'Samsung QLED TV',
                image: 'https://content1.rozetka.com.ua/goods/images/big/364929632.jpg',
                link: 'https://rozetka.com.ua/ua/samsung-qe55q60cauxua/p373026732/',
                price: 35999,
                oldPrice: 42000,
                category: 'tv',
            },
            {
                title: 'TCL Roku TV',
                image: 'https://content2.rozetka.com.ua/goods/images/big/239518392.png',
                link: 'https://rozetka.com.ua/ua/327987148/p327987148/',
                price: 9897,
                oldPrice: 10100,
                category: 'tv',
            },
            {
                title: 'Ноутбук ASUS VivoBook',
                image: 'https://content.rozetka.com.ua/goods/images/big/297036718.jpg',
                link: 'https://rozetka.com.ua/ua/asus-90nb0vx2-m00v40/p359402565/',
                price: 24999,
                oldPrice: 30999,
                category: 'laptop',
            },
            {
                title: 'Ноутбук HP Pavilion',
                image: 'https://content1.rozetka.com.ua/goods/images/big/207625738.jpg',
                link: 'https://rozetka.com.ua/ua/hp-4a7n2ea/p314213398/',
                price: 13500,
                oldPrice: 16000,
                category: 'laptop',
            },
            {
                title: 'Ноутбук Dell Inspiron',
                image: 'https://content1.rozetka.com.ua/goods/images/big/207625738.jpg',
                link: 'https://rozetka.com.ua/ua/hp-4a7n2ea/p314213398/',
                price: 22999,
                oldPrice: 29999,
                category: 'laptop',
            },
            {
                title: 'Ноутбук Lenovo ThinkPad',
                image: 'https://content.rozetka.com.ua/goods/images/big/363879604.jpg',
                link: 'https://rozetka.com.ua/ua/lenovo-21e3006ara/p395084901/',
                price: 44999,
                oldPrice: null,
                category: 'laptop',
            },
            {
                title: 'Монітор 27" Acer Nitro VG271UM3bmiipx',
                image: 'https://content2.rozetka.com.ua/goods/images/big/363113500.jpg',
                link: 'https://hard.rozetka.com.ua/ua/acer-umhv1ee301/p391147500/',
                price: 9599,
                oldPrice: 11999,
                category: 'monitors',
            },
            {
                title: 'Монітор 27" HP Omen Hewlett-Packard Gaming Monitor 27c (35D67AA)',
                image: 'https://content.rozetka.com.ua/goods/images/big/356215488.jpg',
                link: 'https://hard.rozetka.com.ua/ua/hp-35d67aa/p390580896/',
                price: 13499,
                oldPrice: 16849,
                category: 'monitors',
            },
            {
                title: 'Монітор ASUS 24” VY249HGE (90LM06A5-B02370) IPS FHD 144Гц',
                image: 'https://content1.rozetka.com.ua/goods/images/big/341538424.jpg',
                link: 'https://hard.rozetka.com.ua/ua/asus-90lm06a5-b02370/p382400505/',
                price: 6000,
                oldPrice: null,
                category: 'monitors',
            },
            {
                title: 'Монітор 4',
                image: 'https://content1.rozetka.com.ua/goods/images/big/331558204.jpg',
                link: 'https://hard.rozetka.com.ua/ua/dell_210_bbrr/p332315899/',
                price: 12099,
                oldPrice: 14888,
                category: 'monitors',
            },
        ],
        categoryList: [
            {
                name: 'tv',
                title: 'Телевізори',
            },
            {
                name: 'laptop',
                title: 'Ноутбуки',
            },
            {
                name: 'phone',
                title: 'Телефони',
            },
            {
                name: 'monitors',
                title: 'Монітор',
            },
        ],
    },
    getters: {
        getProductsList: ({ productsList }) => productsList,
        getCategoryList: ({ categoryList }) => categoryList,
        getProductByCategory: (state) => (prodName) => state.productsList.filter((prod) => prod.category === prodName),
    },
    mutations: {},
    actions: {},
    modules: {},
})
