//constructor
function book(title,author,year) {
this.title = title;
this.author = author;
this.year = year;
this.getSummary = function(){
    return`${this.title} was written by ${this.author} in ${this.year}`;
}


}
//instantiate
const book1 = new book('suits' ,'harvey spectre','2009');
const book2 = new book('vikings','ragnar','2012');


console.log(book2.getSummary());
