const getAverage = (a:number,b:number,c?:number):string => {
    let total = a + b
    let count = 2

    if(typeof c !== "undefined") {
        total += c
        count ++
    }
    
    const result = total / count
    return result + 'result'
}

getAverage(10,20,30)

// number istiyor..
getAverage('',20,30)

// ? optional
getAverage(10,20)

//Parametre bilgisi belli değilse..

const getAverage2 = (...a:number[]):string => { //Rest operatörü

    let total = 0
    let count = 0

    for(let i = 0; i <a.length;i++){
        total += a[i]
        count++
    }

    const result = total / count
    return result + 'result'

}

getAverage2(1,2,3,4,5)
