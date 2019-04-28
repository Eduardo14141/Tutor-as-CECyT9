window.onload = () => {
    initPicker();
    initFormValidation();
};

const initPicker = () => {
    document.querySelector("#photo").addEventListener("click", () => {
        document.querySelector("#file-input").click();
    });
};
const initFormValidation = ()=>{
    document.querySelector("#confirm-btn").addEventListener("click", (evt)=>{
        evt.preventDefault();
        if(!validateName())
            return false;
        if(!lastnameValidators())
            return false;
        if(!validateBoleta())
            return false;
        if(!validateSex())
            return false;
        if(!validateEmail())
            return false;
        if(!validateTelephone())
            return false;
        if(!validateCellphone())
            return false;
        //Checar el submit
        document.querySelector("#confirm-form").submit();
    });
};
