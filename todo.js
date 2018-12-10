
const form=document.getElementsByClassName("js_form");
console.log(form);

function handlerSubmit(){
    const li=form.parentNode();
    console.log(li);
    delForm();
    paintTodo();
}

function getSubmit(){
    form.addEventListener("submit",handlerSubmit);
    
}

function makeForm(){
    
}

function clickBox(){
    const box=document.getElementsByClassName("box");
    box.addEventListener("click",makeForm);
}

function init(){
    clickBox();
}
init();





