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
}
const cleanHelpers = ()=>{
    $(".helper").text("");
}