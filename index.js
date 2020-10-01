console.log('this is soc library');

lForm = document.getElementById('lForm');
lForm.addEventListener('submit', submitFunction);

function submitFunction(e) {

    e.preventDefault();
    console.log('Your form submitted successfully');

    let name = document.getElementById('bName').value;
    let author = document.getElementById('bAuthor').value;
    let type;
    let fiction = document.getElementById('fradio');
    let programming = document.getElementById('pradio');
    let cooking = document.getElementById('cradio');
    if(true)
    {
        console.log('error occured');
    }
        
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
 
    // code for localStorage

    let bookRecord = localStorage.getItem('bookRecord');
    if (bookRecord == null ) {
        bookObj = [];
    }
    else {
        bookObj = JSON.parse(bookRecord);
    }
    let myObj = {
        name:name,
        author:author,
        type: type
    }

    bookObj.push(myObj);
    localStorage.setItem('bookRecord', JSON.stringify(bookObj));
    name.value = "";
    author.value = "";
    type="";
    console.log(bookObj);

    let book = new Book(name, author, type);
    console.log(book);
    let display =new Display();
    
    if(display.validate(book)){
        display.add();
        display.clear();
        display.show('success','Your book added successfully','Success!');
    }
    else{
        display.show('danger','There is some Error','Error!');
    }

}




var i=1;
class Book {
    constructor(name, author, type) {
        this.name =name;
        this.author =author;
        this.type =type;
    }
}

class Display {
    add(book) {

        let bookRecord = localStorage.getItem('bookRecord');
        if (bookRecord == null ) {
        bookObj = [];
        }
        else {
        bookObj = JSON.parse(bookRecord);
         }

         let html ="";
         bookObj.forEach(function(element,index){
        html += `
                <tr>
                <td>${i++}</td>
                <td>${element.name}</td>
                <td>${element.author}</td>
                <td>${element.type}</td>
                <td><button class="btn btn-primary pd-5">delete</button></td>
            </tr>
             `

        let bookElm = document.getElementById('tableBody');
    if(bookObj.length != 0){
        bookElm.innerHTML = html;
       
    }
    });


         
    }

    clear() {
        let lForm = document.getElementById('lForm');
        lForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, displayMsg ,imp) {
        let msg = document.getElementById('msg');
        msg.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${imp}</strong>  ${displayMsg}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
        setTimeout(function () {
            msg.innerHTML = ""
        }, 10000);
    }
}
// let display =new Display();
// display.add();
