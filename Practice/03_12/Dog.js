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
}

export default Dog;