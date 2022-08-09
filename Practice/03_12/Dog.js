const dog1 = {
    name: "Olive",
    color: "golden",
    legsNum: 4,
    earsNum: 2,
    favoritePerson: {
      name: "Kenzie",
    },
  };

class Dog {
    constructor(
        name,
        color,
        legsNum,
        earsNum,
        favoritePersonName,
        hasWalked
    ) {
        this.name = name;
        this.color = color;
        this.legsNum = legsNum;
        this.earsNum = earsNum;
        this.favoritePerson = {
            name: favoritePersonName
        };
        this.hasWalked = hasWalked;
    }
    toggleWalked(walkedStatus) {
        this.hasWalked = walkedStatus;
    }
};

const dog2 = new Dog(
    "sage",
    "white",
    4,
    2,
    "Taylor",
    false
);

console.log(dog2)