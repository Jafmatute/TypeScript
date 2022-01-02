"use strict";
(() => {
    const hero = 'flash';
    function getName() {
        return hero;
    }
    const activeBatiSignal = () => {
        return `bati signal`;
    };
    console.log(typeof activeBatiSignal);
    const heroName = getName();
    console.log(heroName);
})();
