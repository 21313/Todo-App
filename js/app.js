
//create a newlist when clicking on the Add button
function funcCall() {
    var inputValue = document.getElementById("inputItem");
    if (inputValue.value != "") {
        var li = document.createElement("li");
        var txtNode = document.createTextNode(inputValue.value);
        li.appendChild(txtNode);
        document.getElementById("myUl").appendChild(li);
        //create close button and append it to each list item
        var myNode = document.getElementsByTagName("LI");
        var txt = document.createTextNode("\u00D7");
        for (var i = 0; i < myNode.length; i++) {
            var span = document.createElement("span");
            span.className = "close";
            span.appendChild(txt);
            myNode[i].appendChild(span);
        }

        // click on a close button to hide the current list item
        var close = document.getElementsByClassName("close");
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";            }
        }

    }
    else {
        alert('You must write something!');
    }
    inputValue.value = "";
}

