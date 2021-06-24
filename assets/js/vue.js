// data
const products = [
    { id: 1, description: "Quarz Luxe", price: 12.53, img: 'assets/img/quarz-luxe.JPG' },
    { id: 2, description: 'Curren Business', price: 20.99, img: 'assets/img/curren-business.JPG' },
    { id: 3, description: 'Curren Sport', price: 5.00, img: 'assets/img/curren-sport.JPG' },
    { id: 4, description: 'Jaragar Racing', price: 8.85, img: 'assets/img/jaragar-racing.JPG' },
    { id: 5, description: 'Liges Hommes', price: 3.50, img: 'assets/img/liges-hommes.JPG' },
    { id: 6, description: 'Maserati Mechanical', price: 65.26, img: 'assets/img/maserati-mechanical.JPG' },
    { id: 7, description: 'Montre Mecanique', price: 25.20, img: 'assets/img/montre-mecanique.JPG' },
    { id: 8, description: 'Brand Designer', price: 28.89, img: 'assets/img/brand-designer.JPG' },
    { id: 9, description: 'Relogio Masculino', price: 4.13, img: 'assets/img/relogio-masculino.JPG' },
    { id: 10, description: 'Tissot Multifunction', price: 29.59, img: 'assets/img/tissot-multifunction.JPG' },
    { id: 11, description: 'Hip Hop Gold', price: 87.14, img: 'assets/img/hiphop-gold.JPG' },
    { id: 12, description: 'Mesh Genova', price: 6.18, img: 'assets/img/mesh-genova.JPG' },
];

const Home = {
    template: '#home',
    name: 'Home',
    data: () => {
        return {
            //products : products
            products,
            searchKey: "",
            liked: [],
            shoppingCart: []
        }
    },
    //Surveille comme un event listener
    computed: {
        filteredList() {
            return this.products.filter(product => {
                //on filtre la liste avec ce qu'on a dans la recherche
                return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
            })
        },

        getLikedCookie() {
            //On va chercher le cookie liked
            let cookieValue = JSON.parse($cookies.get('liked'));
            console.log(cookieValue);
            cookieValue == null ? this.liked = [] : this.liked = cookieValue;
        }
    },
    //Executé avec un "onclick" ou "onchange" ou ....
    methods: {

        //On ajoute le tableau de liked en cookie
        setLikeCookie() {
            document.addEventListener('input', () => {
                setTimeout(() => {
                    $cookies.set('liked', JSON.stringify(this.liked));
                }, 300);
            });
        }
    },

    mounted: () => {
        this.getLikedCookie();
    }

}

const UserSettings = {
    template: '<h1>User Settings</h1>',
    name: 'User Settings',

}

const WishList = {
    template: '<h1>WishList</h1>',
    name: 'WishList',

}

const ShoppingCart = {
    template: '<h1>ShoppingCart</h1>',
    name: 'ShoppingCart',

}


//router [Liste de toutes les routes de l'appli => Liés aux composants déclarés au dessus]
const router = new VueRouter({
    routes: [
        { path: "/", component: Home, name: "Home" },
        { path: "/user_settings", component: UserSettings, name: "UserSettings" },
        { path: "/wish_list", component: WishList, name: "WishList" },
        { path: "/shopping_cart", component: ShoppingCart, name: 'ShoppingCart' },
    ]
})

const vue = new Vue({
    router
}).$mount('#app');