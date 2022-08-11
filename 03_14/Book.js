class Book {
    constructor(
    title,
    author,
    datePub,
    numPages,
    readStatus
    ) {
    this.title = title,
    this.author = author,
    this.datePub = datePub,
    this.numPages = numPages,
    this.readStatus = readStatus
    }
    updateReadStatus(newReadStatus) {
                this.readStatus = newReadStatus;
    }
}

export default Book;