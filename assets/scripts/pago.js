function calcularPrecio() {
    // Obtiene los valores seleccionados
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;

    // Lógica para calcular el precio basado en las opciones seleccionadas
    var precio = 0.00;

    // Ejemplo de lógica de precios (puedes personalizar según tus necesidades)
    if (origen === "SANTAM" && destino === "Veracruz" || origen === "Veracruz" && destino === "SANTAM") {
      precio = 648.00;

    } else if (origen === "TAPO" && destino === "Veracruz" || origen === "Veracruz" && destino === "TAPO") {
      precio = 614.00;
    } 

   
    // Muestra el resultado en el elemento con id "precioResultado"
    // Suponiendo que 'precio' ya ha sido definido y tiene un valor numérico.

// Calcular el IVA
var iva = precio.toFixed(2) * 0.16;

// Mostrar el precio con dos decimales
document.getElementById("precioResultado").textContent = "El precio es: $" + precio.toFixed(2);

// Mostrar el IVA con dos decimales
document.getElementById("precioIVA").textContent = "El IVA de esta compra es: $" + iva.toFixed(2);

  }




   // Función que se ejecuta al hacer clic en el botón
   function redirigir() {
    // Muestra un alert
    alert("¡Gracias por comprar con nosotros! Te redirigiremos al inicio");

    // Redirige a index.html
    window.location.href = "index.html";
}

// Asigna la función al evento clic del botón
document.getElementById("miBoton").addEventListener("click", redirigir);