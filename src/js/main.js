const favorite = require("./modules/favorite.js");
const hotelsTabs = require("./modules/hotels-tabs.js");
const burgerMenu = require("./modules/burger-menu.js");

// import Swiper JS
import Swiper, {Pagination} from 'swiper';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    speed: 600,
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

