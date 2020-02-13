function mostrar()
{
    var vNum1 = prompt("Numero", "Ingrese numero");
    var vNum2 = prompt("Numero", "Ingrese numero");


    if(vNum1 == vNum2)
    {
        alert(vNum1 + vNum2)
    }
    else 
    {
        if(vNum1 > vNum2)
        {
        resta = parseInt(vNum1) - parseInt(vNum2);
        alert(resta);
        }
        else
        {
        suma =parseInt(vNum1) + parseInt(vNum2);
        alert(suma);
        if(suma > 10)
        {
            alert("bla bla");
        }
        }
        
    }


}
