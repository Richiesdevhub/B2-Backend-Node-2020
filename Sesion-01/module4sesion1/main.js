// //Modulo integrado
// var os = require('os');

// var misCPUs = os.cpus();
// // console.log(misCPUs);

// // Modulos de 3ros (NPM)
// var moment = require('moment');
// var now = moment();
// // console.log(`Hoy es ${now}`);

// //Modulos creados por nosotros.
// var modulo = require('./module');
// modulo.sumar(5, 3);
// modulo.resta(6, 1);

var dns = require('dns');
var bedudns = dns.lookup('www.bedu.com', function(err, adresses, family) {
    console.log(adresses);
});

var dns = require('colors');
console.log('hello'.green);
console.log('This colors module'.underline.red)
console.log('its kind of fun'.inverse);
console.log('Colorssss!!!!'.rainbow);
console.log('Rick out'.trap);

var nom = require('./helloyou');
nom.hello('Rick');