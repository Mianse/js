//const s1 = 'hello';
//console.log(typeof s1);

//const s2 = new String('hello');
//console.log(typeof s2);

//object literal
const book1 = {
tittle:'teen wolf',
author: 'scott michael',
year: 2016,
getsummary: function(){
    return`${this.tittle} was written by ${this.author} in ${this.year}`;
}
}

const book2 = {
    tittle:'ghost rider',
    author: 'nicholas cage',
    year: 2010,
    getsummary: function(){
        return`${this.tittle} was written by ${this.author} in ${this.year}`;
    }
    }
//console.log(book2.getsummary());
console.log(Object.values(book2));
//console.log(Object.keys(book2));
