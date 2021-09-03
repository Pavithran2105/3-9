var newNotes = [

];
// alert('hi');
var container$ = document.getElementById("table-container");
var tbody$ = document.createElement("tbody");

function displayNotes(inputNotes){

    var node = document.getElementsByTagName("tbody");
    node[0].querySelectorAll('*').forEach(n => n.remove());


    for (var i = 0; i < inputNotes.length; i++) {

        var tr$ = document.createElement("tr");
        var td1$ = document.createElement("td");
        var td2$ = document.createElement("td");
        var td3$ = document.createElement("td");
        var td4$ = document.createElement("td");

        td1$.innerHTML = `<td style= "width:3%;"><i class="fa fa-check"></i></td>`;
        td2$.innerHTML = inputNotes[i]["Notes"];
        td4$.innerHTML = `<td style= "width:3%;"><a onclick="editRow(${i})"><i class="fa fa-pencil-square-o"></i></a></td>`;
        td4$.innerHTML = `<td style= "width:3%;"><a onclick="deleteRow(${i})"><i class="fa fa-close"></i></a></td> `;

        tr$.appendChild(td1$);
        tr$.appendChild(td2$);
        tr$.appendChild(td3$);
        tr$.appendChild(td4$);

        tbody$.appendChild(tr$);

    }
}

function addNew(){
    var newNew = {};

    const enterNotes = document.getElementById("enterNotes").Value;
    newNew['Notes'] = enterNotes;

    newNotes.push(newNew);
    displayNotes(newNotes);
    clearFields();
}

container$.appendChild(tbody$);
