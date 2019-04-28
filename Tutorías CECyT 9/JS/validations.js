const validateStudentsData = ()=>{
    validateName();
}

const validateName = () =>{
    let input = document.querySelector("#name");
    let name = input.value;
    let helper = document.querySelector("#name-help");
    input.className = input.className.replace(" is-invalid", "");
    
    if(!name){
        input.className = input.className += " is-invalid";
        helper.textContent = "Ingresa tu nombre(s)";
        return false;
    }
    if(name.split(" ").length > 3){
        // Tres nombres como máximo
        input.className = input.className += " is-invalid";
        helper.textContent = "Asegúrate de ingresar correctamente tu nombre";
        return false;
    }
    if(!/^[a-zá-úñü ]{2,30}$/i.test(name)){
        input.className = input.className += " is-invalid";
        helper.textContent = "Asegúrate de ingresar correctamente tu nombre";
        return false;
    }
    helper.textContent = "";
    return true;
}

const lastnameValidators = () =>{
    let f_lastname = document.querySelector("#f-lastname");
    let f_helper = document.querySelector("#f-lastname-help");
    
    if(!validateLastname(f_lastname, f_helper))
        return false;
    
    let m_lastname = document.querySelector("#m-lastname");
    let m_helper = document.querySelector("#m-lastname-help");
    
    if(!validateLastname(m_lastname, m_helper))
       return false;
       
    return true;
};

const validateLastname = (input, helper) =>{
    let lastname = input.value;
    input.className = input.className.replace(" is-invalid", "");
    
    if(!lastname){
        input.className = input.className += " is-invalid";
        helper.textContent = "Ingresa tu apellido";
        return false;
    }
    if(lastname.split(" ").length > 2){
        // Apellido como "De La" "De Dios"
        input.className = input.className += " is-invalid";
        helper.textContent = "Asegúrate de ingresar correctamente tu apellido";
        return false;
    }
    if(!/^[a-zá-úñü ]{2,15}$/i.test(lastname)){
        input.className = input.className += " is-invalid";
        helper.textContent = "Asegúrate de ingresar correctamente tu nombre";
        return false;
    }
    helper.textContent = "";
    return true;
};

const validateBoleta = () =>{
    let input = document.querySelector("#boleta");
    let number = input.value;
    let helper = document.querySelector("#boleta-help");
    let date = new Date();
    
    input.className = input.className.replace(" is-invalid", "");
    
    if(!number){
        input.className = input.className += " is-invalid";
        helper.textContent = "Completa este campo";
        return false;
    }
    if(!/^[0-9]{10}$/.test(number)){
        input.className = input.className += " is-invalid";
        helper.textContent = "La boleta no es válida";
        return false;
    }
    if(parseInt(number.substr(0,4)) > date.getFullYear() + 1){
        input.className = input.className += " is-invalid";
        helper.textContent = "La boleta no es válida";
        return false;
    }
    helper.textContent = "";
    return true;
}
const validateSex = ()=>{
    let input = document.querySelector('input[name="sex-radio-btn"]:checked');
    let helper = document.querySelector("#sex-help");
    
    if(!input){
        helper.textContent = "Selecciona una opción";
        return false;
    }
    let sex = input.value;
    
    if(sex !== "1" && sex !== "2"){
        helper.textContent = "Se ha modificado el contenido de la página, recárgala por favor";
        return false;
    }
    helper.textContent = "";
    return true;
}
const validateTelephone = () =>{
    let input = document.querySelector("#telephone");
    let number = input.value.replace(/ /g, "");
    let helper = document.querySelector("#telephone-help");
    input.className = input.className.replace(" is-invalid", "");
    
    if(!number){
        console.log("Atender en un confirm si no quiere dejar teléfono de contacto");
        return true;
    }    
    if(/^[0-9]{8}$/.test(number)){
        input.className = input.className += " is-invalid";
        helper.textContent = "Asegura introducir el número en formato de 8 dígitos";
        return false;
    }
    helper.textContent = "";
    return true;
}
const validateCellphone = () =>{
    let input = document.querySelector("#cellphone");
    let number = input.value.replace(/ /g, "");
    let helper = document.querySelector("#cellphone-help");
    input.className = input.className.replace(" is-invalid", "");
    
    if(!number){
        console.log("Atender en un confirm si no quiere dejar teléfono de contacto");
        return true;
    }    
    if(/^[0-9]{8}$/.test(number)){
        input.className = input.className += " is-invalid";
        helper.textContent = "Asegura introducir el número en formato de 10 dígitos";
        return false;
    }
    helper.textContent = "";
    return true;
}

const validateEmail = ()=>{
    let input = document.querySelector("#email");
    let email = input.value;
    let helper = document.querySelector("#email-help");
    
    input.className = input.className.replace(" is-invalid", "");
    let not_ok = emailIsInvalid(email);
    if(!!not_ok){
        input.className = input.className += " is-invalid";
        helper.textContent = not_ok;
        return false;
    }
    helper.textContent = "";
};

const emailIsInvalid = email =>{
    if(!email)
        return "Completa este campo"
    if (email.length < 5)
        return "El correo electrónico debe contener al menos 5 caracteres";
    if (email.length > 50)
        return "El correo electrónico puede contener como máximo 50 caracteres";
    const splitted_email = email.split('@');
    if (splitted_email.length > 2)
        return "El correo electrónico sólo puede contener un @";
    if (splitted_email.length === 1)
        return "El correo electrónico debe contener un @";
    const invalid_email_name = validateEmailName(splitted_email[0]);
    if (invalid_email_name)
        return invalid_email_name;
    const invalid_email_domain = validateEmailDomain(splitted_email[1]);
    if (invalid_email_domain)
        return invalid_email_domain;
    return false;
}

const validateEmailName = (name) => {
    if(name.length < 3 )
        return "El nombre del correo debe ser de mínimo 3 caracteres";
    if(!(/^[A-Za-z0-9\._\-]+$/).test(name))
        return "En el correo sólo se permiten caracteres del alfabeto inglés, guión medio, bajo, dígitos y puntos (.)";
    return false;
};
const validateEmailDomain = (domain) => {
    if (domain.length < 3)
        return "El domino del correo electrónico debe contener al menos 3 caracteres";
    if (!/^([a-zA-Z0-9]+\.[a-zA-Z0-9]+)+$/.test(domain))
        return "El dominio del correo electrónico debe corresponder al formato x.x";
    return false;
};
