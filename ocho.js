function mostrar()
{
    var num;
    var letra;
    var ingresoDatos = "si";
    var countPar = 0;
    var countImpar = 0;
    var countCero = 0;
    var countNum = 0;
    var sumaNum = 0;
    var sumaNumNegativo = 0;
    var promedio = 0;
    var numMax = -101;
    var numMin = 101;
    var letraMax;
    var letraMin;

    while(ingresoDatos == "si")
    {           
        num = parseInt(prompt("Ingrese un numero del -100 al 100"));
        while(num < -100 || num > 100 || (isNaN(num)))
        {
            alert("El numero ingresado es incorrecto. Vuelva a intentarlo");
            num = parseInt(prompt("Ingrese un numero del -100 al 100"));
        }

        letra = prompt("Ingrese una letra.");
        while((!isNaN(letra)))
        {
            alert("Lo ingresado no corresponda a una letra. Vuelva a intentarlo");
            letra = prompt("Ingrese una letra.");            
        }
        ingresoDatos = prompt("Desea seguir ingresando datos? Responda 'si' o 'no'");
        while(ingresoDatos != "si" && ingresoDatos != "no")
        {
            alert("Los datos ingresados son incorrectos.")
            ingresoDatos = prompt("Desea seguir ingresando datos? Responda 'si' o 'no'")
        }
        

        countNum++;
        sumaNum = sumaNum + num;
        promedio = sumaNum / countNum;

        if(num % 2 == 0)
        {
            countPar++;
        }
        else
        {
            countImpar++;
        }

        if(num == 0)
        {
            countCero++;
        }

        if(num < 0)
        {
            sumaNumNegativo = sumaNumNegativo + num;
        }

        if(numMax < num)
        {
            numMax = num;
            letraMax = letra;   
        }
        if(numMin > num)
        {
            numMin = num;
            letraMin = letra;
        }
    }

    alert("La cantidad de numeros pares es: " + countPar);
    alert("La cantidad de numeros impares es: " + countImpar);
    alert("La cantidad de ceros ingresados son: " + countCero);
    alert("El promedio de numeros ingresado es: " + promedio);
    alert("La suma de los numeros negativos es: " + sumaNumNegativo);
    alert("El numero maximo y su letra es: " + numMax + ", " + letraMax);
    alert("El numero minimo y su letra es: " + numMin + ", " + letraMin);

}
