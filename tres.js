function mostrar()
{
    var vPrecio = parseInt(prompt("Precio", "Ingrese valor"));
    var vDescuento = parseInt(prompt("Descueto","Ingrese valor"));
    
    var total = vPrecio - (vPrecio * vDescuento) / 100;
    
    document.getElementById("elPrecioFinal").value = total;
}
