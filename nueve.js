function mostrar()
{
    var ingreso = "si";
    var countPar = 0;
    var countTemp = 0;
    var countPeso = 0;
    var marcaPesada = 31;
    var totalPeso = 0;
    var promedio = 0;
    var pesoMax = 0;
    var pesoMin = 101;

    while(ingreso == "si")
    {
        var marca = prompt("Ingrese el nombre de la marca del producto.");

        var peso = parseInt(prompt("Ingrese el peso. Debe ser de '1' a '100'"));
        while(peso > 100 || peso < 1 || (isNaN(peso)))
        {
            alert("Dato incorrecto.");
            peso = parseInt(prompt("Ingrese el peso. Debe ser de '1' a '100'"));
        }

        var temp = parseInt(prompt("Ingrese la temperatura. Debe ser de '-30' a '30'"));
        while(temp > 30 || temp < -30 || (isNaN(temp)))
        {
            alert("Dato incorrecto.");
            temp = parseInt(prompt("Ingrese la temperatura. Debe ser de '-30' a '30'"));
        }

        ingreso = prompt("Desea seguir ingresando datos? si/no");
        while(ingreso != "si" && ingreso != "no")
        {
            alert("Dato incorrecto.")
            ingreso = prompt("Desea seguir ingresando datos? si/no");
        }

        if(temp % 2 == 0)
        {
            countPar++;
        }
        if(marcaPesada > peso)
        {
            marcaPesada = marca;
        }
        if(temp < 0)
        {
            countTemp++;
        }
        
        countPeso++;
        totalPeso = totalPeso + peso;
        promedio = totalPeso / countPeso;

        if(peso > pesoMax)
        {
            pesoMax = peso;
        }
        if(peso < pesoMin)
        {
            pesoMin = peso;
        }

    }
    document.write("Cantidad de temperaturas pares son: " + countPar + "<br>");
    document.write("La marca del producto mas pesado es: " + marcaPesada + "<br>");
    document.write("Cantidad de productos conservados a menos de 0 grados: " + countTemp + "<br>")
    document.write("El promedio del peso de todos los productos es: " + promedio + "<br>");
    document.write("El peso maximo es de: " + pesoMax + "<br>");
    document.write("El peso minimo es de: " + pesoMin + "<br>");
    
}
