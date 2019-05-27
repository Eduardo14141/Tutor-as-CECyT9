

const groupIsInvalid = (group)=>{
    if (!group)
        return "selecciona un grupo";
    if (!/^([1-6]{1})(i)(m|v)([0-9]{1})$/i.test(group))
        return "Al parecer ha escrito mal su grupo";
    return false;
}

const imageIsInvalid = (image) => {
    if (!image)
        return "Escanea y sube una fotografía infantil, fondo blanco y sin accesorios ni lentes";
    
    let extension = image.split(".");    
    if (!/(\png|\jpg|\jpeg)$/i.test(extension[extension.length - 1]))
        return "Sólo se admiten archivos .jpg y .png";
    
    return false;
};

const nameIsInvalid = (name) => {
    if (!name)
        return "Ingresa tu nombre(s)";
    // Tres nombres como máximo
    if (name.split(" ").length > 3)
        return "Asegúrate de ingresar correctamente tu nombre";
    if (!/^[a-zá-úñü ]{2,30}$/i.test(name))
        return "Asegúrate de ingresar correctamente tu nombre";
    return false;
}

const lastnameIsInvalid = (lastname) => {
    if (!lastname)
        return "Ingresa tu apellido";
    // Apellido como "De La" "De Dios"
    if (lastname.split(" ").length > 2)
        return "Asegúrate de ingresar correctamente tu apellido";
    if (!/^[a-zá-úñü ]{2,15}$/i.test(lastname))
        return "Asegúrate de ingresar correctamente tu nombre";
    
    return false;
};

const boletaIsInvalid = (number) => {
    let date = new Date();
    if (!number)
        return "Completa este campo";
    if (!/^[0-9]{10}$/.test(number))
        return "La boleta no es válida";
    //Boleta mayor a un año por ejemplo, estamos en 2018 y ponen boleta 2030
    if (parseInt(number.substr(0, 4)) > date.getFullYear() + 1)
        return "La boleta no es válida";
    //Boleta de hace 10 años
    if (parseInt(number.substr(0, 4)) < date.getFullYear() - 9)
        return "La boleta no es válida";
    
    return false;
}

const telephoneIsInvalid = (number) => {
    number.replace(/ /g, "");
    if (number.length === 0)
        return "Proporciona tu teléfono para poder contactarnos contigo";
    if (!/^[0-9]{8}$/.test(number))
        return "Asegura introducir el número en formato de 8 dígitos";
    return false;
}
const cellphoneIsInvalid = (number) => {
    number.replace(/ /g, "");
    if (number.length === 0)
        return "Proporciona tu celular para poder contactarnos contigo";
    if (!/^[0-9]{10}$/.test(number))
        return "Asegura introducir el número en formato de 10 dígitos";
    return false;
}

const emailIsInvalid = email => {
    if (!email)
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
    if (name.length < 3)
        return "El nombre del correo debe ser de mínimo 3 caracteres";
    if (!(/^[A-Za-z0-9\._\-]+$/).test(name))
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

const firstDateIsGreater = (first_date, second_date)=>{
    if(new Date(first_date) > new Date(second_date))
        return "La fecha de cierre no puede ser menor a la de inicio";
    return false;
};

const dateIsNotGreaterThanToday = (date)=>{
    if(!date)
        return "Completa este campo";
    if(new Date(date) == "Invalid Date")
        return "Formato no válido";
    let today = new Date().setHours(0,0,0);
    if(today - Date.parse(date) > 0 )
        return "La fecha ya pasó, seleccione una de mañana en adelante";
    return false;
};

const integerIsInvalid = (number)=>{
    if(/^[0-9]+$/.test(number))
        return false;
    return true;
}

const placesAvailableIsInvalid = (number)=> {
    if(!number)
        return "Completa este campo"
    if(!/^[0-9]+$/.test(number))
        return "Formato no válido";
    if(parseInt(number) > 50)
        return "las tutorías pueden tener 50 lugares disponibles como máximo";
    return false;
}