"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let PowerHeros;
    (function (PowerHeros) {
        PowerHeros[PowerHeros["acuaman"] = 0] = "acuaman";
        PowerHeros[PowerHeros["batman"] = 1] = "batman";
        PowerHeros[PowerHeros["flash"] = 5] = "flash";
        PowerHeros[PowerHeros["superman"] = 100] = "superman";
    })(PowerHeros || (PowerHeros = {}));
    const fuerzaFlash = PowerHeros.flash;
    const fuerzaSuperman = PowerHeros.superman;
    const fuerzaBatman = PowerHeros.batman;
    const fuerzaAcuaman = PowerHeros.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    // const largoDelPoder:number = poder.length;
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
