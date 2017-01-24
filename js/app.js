//create close button and append it to each list item
var myNode = document.getElementsByTagName("LI");
for(var i = 0; i < myNode.length; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
 
    span.appendChild(txt);
    myNode[i].appendChild(span);
}

// click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for(var i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click',function(ev){
//     if(ev.target.tagName === 'li'){
//         ev.target.classList.toogle('checked');
//     }
// },false);

//create a newlist when clicking on the Add button
function funcCall(){
   var li = document.createElement("li");
   var inputValue = document.getElementById("inputItem").value;
   var txtNode = document.createTextNode(inputValue);
   li.appendChild(txtNode);
   if(inputValue === ""){
       alert('You must write something!');
   }
   else{
       document.getElementById("myUl").appendChild("li");
   }
}
document.getElementById("inputItem").value = "";
