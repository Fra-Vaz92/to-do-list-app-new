function newItem () {

//1 adding a new item to the list

let li = $('<li></li>');
let inputvalue = $('#input').val();
li.append(inputvalue);

if (inputvalue === '') {

    alert('You must write something!');
} else{
    let list = $('#list');
    list.append(li);
    $('#input').val('');
}

//2. crossing out an item from the list

function crossOut() {
    li.toggleClass("strike");
}


li.on('dblclick', crossOut);

//3 Adding a delete Button

let crossOutButton = $("<crossOutButton></crossOutButton>");
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);


crossOutButton.on('click', deleteListItem);

 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
function deleteListItem() {
    li.addClass('delete');
}

// 4. Reordering the items:
$('#list').sortable();

}
