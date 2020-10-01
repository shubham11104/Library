console.log('This is backup file')
add(book) {

    console.log('Adding to UI');
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${i++}</td>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td><button class="btn btn-primary pd-5">delete</button></td>
                    </tr>`;

    tableBody.innerHTML += uiString;
    let arr = [book.name,book.author,book.type];
    // console.log(arr);
    localStorage.setItem('books',JSON.stringify(arr));
}
