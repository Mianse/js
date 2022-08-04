
                            //constructor
function book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
    }
    
                            //get summary
    book.prototype.getSummary = function(){
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }

                               //get age
    book.prototype.getAge = function(){
        const years = new Date().getFullYear() - this.year;
        return`${this.title} is ${years} years old` ;
    }

    
                             //instantiate
    const book1 = new book('suits' ,'harvey spectre','2009');
    const book2 = new book('vikings','ragnar rothbrok','2012');
    
    
    console.log(book1);
    
    