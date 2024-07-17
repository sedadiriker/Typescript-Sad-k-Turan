interface Point {
    x:number,
    y:number
}

interface Passenger {
    name:string,
    phone:string
}

interface Vehicle {
    currentLocation :Point;
    travelTo(point:Point):void //
    getDistance(pointA:Point, pointB:Point):number // Sadece methodun şemasını belirtiyoruz.
    addPassenger(passenger:Passenger) : void
    removePassenger(passenger:Passenger) :void
}

let travelTo = (point : Point) => {
    // ..
}
let getDistance = (pointA:Point, pointB:Point) => {
    // ..
}

travelTo({
    x:2,
    y:3
})