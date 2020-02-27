function mostrar()
{
    var count = 0;
    var notasT = 0;
    var promedio = 0;
    
    for(i = 1; i <= 3; i++)
    {
        var nota = parseInt(prompt("Ingrese numero"));
        var sexo = prompt("Ingrese sexo con: m o f");

        while(nota < 0 || nota > 10)
        {
            alert("Numero incorrecto, vuelva a ingresar.");
            nota = parseInt(prompt("Ingrese numero"));
        }

        while(sexo != "m" && sexo != "f")
        {
            alert("Sexo incorrecto, vuelva a ingresar.");
            sexo = prompt("Ingrese sexo con: m o f");
        }
        count++;
        notasT = parseInt(notasT) + parseInt(nota);
    }
    promedio = notasT / count;
    alert("Promedio: " + promedio);
}
