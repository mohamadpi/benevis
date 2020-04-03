var text = document.getElementById("msg-put");
var form = document.getElementById("msg-form");
var add = document.getElementById("add");
var cancel = document.getElementById("cancel-msg")
var sub_btn = document.getElementById("sub-msg");
var msg = document.getElementById("msg");
var social = document.getElementById("social");

var i = localStorage.length
    for (x = 0; x < i; x++){
        msg.innerHTML = "<div class='msg'>" + localStorage.getItem(x) + "</div>" + msg.innerHTML;
}

sub_btn.addEventListener("click", function(e){
    if (text.value == ""){
        alert("لطفا چیزی بنویسید")
        e.preventDefault()
    }else {
        var i = localStorage.length
        localStorage.setItem(i , text.value);
        console.log(localStorage.getItem(i)) 
        msg.innerHTML = "<div class='msg'>" + localStorage.getItem(i) + "</div>" + msg.innerHTML;
        text.value = "";
        e.preventDefault()
    }
    
})


add.addEventListener("click", function(){
    if (add.className == "add-icon"){
        add.classList.add("hide");
        add.style.display = "none";
        form.style.display = "block";
        msg.style.display = "none"
        social.style.display = "none"
    }else {
        add.classList.remove("hide");
        add.style.display = "block";
        form.style.display = "none";
        msg.style.display = "block"
        social.style.display = "block"
    }
})

cancel.addEventListener("click", function(){
    if (add.className == "add-icon"){
        add.classList.add("hide");
        add.style.display = "none";
        form.style.display = "block";
        msg.style.display = "none"
        social.style.display = "none"
    }else {
        add.classList.remove("hide");
        add.style.display = "block";
        form.style.display = "none";
        msg.style.display = "block"
        social.style.display = "block"
    }
})


