$(document).ready(()=>{
    initComponents();
});

const initComponents = () =>{
    registerModalListeners();
    registerTutorshipListener();
};

const registerModalListeners = ()=>{
    let div = document.querySelector("#div-form-add-tutorship");
    let li = document.createElement("li");
    li.setAttribute("class", "fas fa-plus");
}

const registerTutorshipListener = ()=>{
    $("#btn-register-tutorship").click(()=>{
        cleanHelpers();
        cleanInvalidInputs();
        let subject = $("#selected-subject").val();
        let teacher = $("#teacher").val();
        let places = $("#places-available").val();
        if(!subject)
            return changeHelper("selected-subject", "Por favor selecciona una unidad de aprendizaje");
        if(integerIsInvalid(subject))
            location.reload();
        if(!teacher)
            return changeHelper("teacher", "Por favor selecciona el docente que impartirá la tutoría");
        if(integerIsInvalid(teacher))
            location.reload();
        let places_status = placesAvailableIsInvalid(places);
        if(places_status)
            return changeHelper("places-available", places_status);
        let tutorship_type = $("input:radio[name=tutorship-type]:checked").val();
        if(!tutorship_type)
            changeHelper("tutorship-type", "Selecciona el tipo de tutoría por favor");
        let first_day = $("#first-day").val();
        let first_day_status = dateIsNotGreaterThanToday(first_day);
        if(first_day_status)
            return changeHelper("first-day", first_day_status);
        let last_day = $("#last-day").val();
        let last_day_status = dateIsNotGreaterThanToday(last_day);
        if(last_day_status)
            return changeHelper("last-day", last_day_status);
        last_day_status = firstDateIsGreater(first_day, last_day);
        if(last_day_status)
            return changeHelper("last-day", last_day_status);
        validateSchedules();
        
    });
}

const changeInputDisplay = (input, display)=>{
    if(display == "none")
        input.style.display = "flex";
    else
        input.style.display = "none";
};

const changeHelper = (name, text)=>{
    $(`#${name}-helper`).text(text);
};
const cleanHelpers = ()=>{
    $(".helper").text("");
};
const cleanInvalidInputs = ()=>{
    let invalid_inputs = document.querySelectorAll(".is-invalid");
    for(let invalid_input of invalid_inputs)
        invalid_input.className.replace(" is-invalid", "");
};

const validateSchedules = ()=> {
    let start_inputs = document.querySelectorAll(".start-hour");
    let end_inputs = document.querySelectorAll(".end-hour");
    let start_helpers = document.querySelectorAll(".start-hour-helper");
    let end_helpers = document.querySelectorAll(".end-hour-helper");
    let _start = [];
    let _end = [];
    let schedule = false;
    for(let i = 0; i< 5; i++){
        let hour = start_inputs[i].value.split(":")[0];
        if(!hour){
            _start.push(0);
            continue;
        }
        let hour_invalid = hourIsInvalid(hour, 7, 20);
        if(hour_invalid){
            start_helpers[i].textContent = hour_invalid;
            return false;
        }
        _start.push(hour);
    }
    for(let i = 0; i < 5; i++){
        let hour = end_inputs[i].value.split(":")[0];
        if(!hour){
            _end.push(0);
            continue;
        }
        let hour_invalid = hourIsInvalid(hour, 8, 21);
        if(hour_invalid){
            end_helpers[i].textContent = hour_invalid;
            return false;
        }
        _end.push(hour);
    }
    for(let i = 0; i < 5; i++){
        if(_start[i] === 0 && _end[i] !== 0)
            start_helpers[i].textContent = "Selecciona la hora a la que inicia la tutoría";
        else if(_start[i] !== 0 && _end[i] === 0)
            end_helpers[i].textContent = "Selecciona la hora a la que termina la tutoría";
        else if(_start[i] === 0 || _end[i] === 0)
            continue;
        else if(_start[i] >= _end[i]){
            start_helpers[i].textContent = "La hora de fin debe ser más grande que la de inicio";
            return;
        }
        else
            schedule = true;
    }
    if(!schedule){
        start_helpers[0].textContent = "Debes definir al menor un día de horarios";
        return false;
    }
    return {start: _start, end: _end};
    
};

const hourIsInvalid = (hour, min, max)=>{
    if(hour < min)
        return "Escoge una hora mayor a las " + min;
    if(hour > max)
        return "Escoge una hora menor a las " + max;
    return false;
};