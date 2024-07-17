var a; // any
a = 5;
a = "a",
    a = true;
//! Tip Ataması
var b; // tip ataması
b = 5;
b = "b",
    b = true;
var c = 'Seda'; // değer ataması
var d = true;
var e;
var f = [1, 2, 3];
var g = [1, 2, 3, "a"];
var h = [1, 2, 3, "a", true];
var ı = ['Seda', 2, true]; // tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 3] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
var kredi = Payment.kredi; //0
var havale = Payment.havale; //1
var eft = Payment.eft; //2
console.log(havale);
