const passengers = [
    {
        id: 1,
        passengerName: "Freddie Mercury",
        isVegetarianOrVegan: false,
        connectedFlights: 2,
    },
    {
        id: 2,
        passengerName: "Amy Winehouse",
        isVegetarianOrVegan: true,
        connectedFlights: 4,
    },
    {
        id: 3,
        passengerName: "Kurt Cobain",
        isVegetarianOrVegan: true,
        connectedFlights: 3,
    },
    {
        id: 3,
        passengerName: "Michael Jackson",
        isVegetarianOrVegan: true,
        connectedFlights: 1,
    },
];

const pass = [];
for (let i = 0; i < passengers.length; i++) {
    pass.push(passengers[i].passengerName)
}
console.log("passengers", pass);

//Second methode
                 
const passengerNames = [];
passengers.forEach((passenger) => {
    passengerNames.push(` passanger: ${passenger.isVegetarianOrVegan}`);
})

console.log("passengers",passengerNames);

//Tredition fuction

