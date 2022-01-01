"use strict";
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    const error2 = (msg) => {
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    error('Ocurrio un error');
    error2('Ocurrio un error devuleve un numero');
})();
