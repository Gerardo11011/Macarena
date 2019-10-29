var token = localStorage.getItem('token');
if (token) {
  token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
}

$('#createArticleButton').on('click', function(){
  // cargar elementos del articulo
  let nombre = $("#nombre").val()
  let precio = $("#precio").val()
  let descripcion = $("#descripcion").val()
  let tipo = $("input[name='tipo']:checked").val();
  let stock = $("#stock").val()

  json_to_send = {
    "name": nombre,
    "price": precio,
    "description": descripcion,
    "stock": stock,
    "type": tipo
  };

  json_to_send = JSON.stringify(json_to_send);

  //console.log(json_to_send)

  
})
