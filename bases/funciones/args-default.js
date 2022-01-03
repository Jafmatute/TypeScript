"use strict";
(() => {
    const fullName = (firstName, lastName, upper = true) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('Tony', 'Stark', false);
    console.log(name);
})();
