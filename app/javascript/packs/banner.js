import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Explore Pembrokeshire", "A Hidden Gem on the Edge of the Cleddau Estuary"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
