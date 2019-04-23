window.onload = ()=>{
    initPicker();
};

const initPicker = ()=>{
    document.querySelector("#photo").addEventListener("click", ()=>{
        document.querySelector("#file-input").click();
    });
};