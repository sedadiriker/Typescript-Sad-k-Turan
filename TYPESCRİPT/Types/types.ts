let a; // any

a = 5
a = "a",
a = true

//! Tip Ataması
let b: number // tip ataması

b = 5
b = "b",
b = true

let c: string = 'Seda' // değer ataması
let d: boolean = true
let e: any
let f: number[] = [1,2,3]
let g: Array<number> = [1,2,3, "a"]
let h: any[] = [1,2,3, "a", true]
let ı: [string,number,boolean] = ['Seda', 2, true] // tuple


const krediPayment = 0
const havalePayment = 1
const eftPayment = 2

enum Payment {kredi=0, havale=3, eft=2}
let kredi = Payment.kredi //0
let havale = Payment.havale //1
let eft = Payment.eft //2

console.log(havale)