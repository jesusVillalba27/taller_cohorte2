var inventario = [];

function agregarProducto() {
     var nombre = document.getElementById("nombre").value;
     var precio = parseFloat(document.getElementById("precio").value);
     var stock = parseInt(document.getElementById("stock").value);

     var producto = {
        nombre: nombre,
        precio: precio,
        stock: stock
    };

    inventario.push(producto);
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";

    mostrarInventario();
}

function realizarVenta() {
     var productoVenta = document.getElementById("productoVenta").value;
     var cantidadVenta = parseInt(document.getElementById("cantidadVenta").value);

     var producto = inventario.find(item => item.nombre === productoVenta);

    if (producto && producto.stock >= cantidadVenta) {
        producto.stock = producto.stock - cantidadVenta;
        var totalVenta = cantidadVenta * producto.precio;
        document.getElementById("resultado").innerHTML = `Venta exitosa. Total de ventas: $${totalVenta}. Stock actual: ${producto.stock} unidades.`;
    } else {
        document.getElementById("resultado").innerHTML = "Producto no encontrado o stock insuficiente.";
    }

    document.getElementById("productoVenta").value = "";
    document.getElementById("cantidadVenta").value = "";

    mostrarInventario();
}

function mostrarInventario() {
    var inventarioHTML = "<h2>Inventario Actual</h2><ul>";

    for (var producto of inventario) {
        inventarioHTML = inventarioHTML + `<li>${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock} unidades`;
    }

    inventarioHTML = inventarioHTML + "</ul>";
    document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + inventarioHTML;
}


