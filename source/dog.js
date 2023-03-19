let dog = {
    name: "Fido",
    weight: 48,
    breed: "Mixed",
    loves: "walks"
};

let fido = dog;

function bark(dog) {
    console.log(dog.name + " Woof")
}

bark(fido);

loseWeight(fido, 10);

function loseWeight(dog, amount) {
    dog.weight = dog.weight - amount;
}
alert(fido.name + " now weights " + fido.weight);