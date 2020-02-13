function mostrar()
{
    var vPlaneta = prompt("Planeta", "Ingrese nombre de planeta");

    switch(vPlaneta){
        case "tierra":
            alert("Aca vivimos");
            break;
        case "mercurio":
        case "venus":
            alert("Aca hace mas calor");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert("Aca hace mas frio");
            break;
        default:
            alert("No es un planeta valido");
            break;
    }
}
