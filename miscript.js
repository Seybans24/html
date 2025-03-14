var cont = 1;
$("#agregar").click(function () {
    // Obtener valores de los inputs
    var nombre = $("#nombre").val();
    var cedula = $("#cedula").val();
    var correo = $("#correo").val();
    var dir = $("#dir").val();

    // Crear una nueva fila
    let fila = `<tr id="${cont}">
                    <td>${nombre}</td>
                    <td>${cedula}</td>
                    <td>${correo}</td>
                    <td>${dir}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="eliminarFila(${cont})
                    ">< i class="bi bi-trash3-fill"></i> Eliminar</button></td
                    </tr>`;
    cont++;
    // Agregar la fila a la tabla
    $("#tabla").append(fila);
    // Limpiar los inputs
    $("#nombre, #cedula,#correo,#dir")
  
});

// Función para eliminar la fila
function eliminarFila(id) {
    $("#" + id).remove();
}
