window.onload = () =>{
    initComponents();
};

const initComponents = () =>{
    let div = document.querySelector("#div-form-add-tutorship");
    let li = document.createElement("li");
    li.setAttribute("class", "fas fa-plus");
    document.querySelector("#add-tutorship-btn").addEventListener("click", function(){
        changeInputDisplay(div, div.style.display);
        changeButtonText(this, this.textContent, li);
    });
    document.querySelector("#cancel-register").addEventListener("click", ()=>{
        div.style.display = "none";
    });
    
};
const changeInputDisplay = (input, display)=>{
    if(display == "none")
        input.style.display = "flex";
    else
        input.style.display = "none";
};
const changeButtonText = (input, text, li)=>{
    console.log(li);
    if(text == " Agregar tutoría")
        input.textContent = "Ocultar formulario";
    else{
        input.textContent = " Agregar tutoría";
        input.insertAdjacentElement("afterbegin",li);
    }
};