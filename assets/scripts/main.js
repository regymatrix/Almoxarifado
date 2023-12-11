/* document.getElementById('').addEventListener('focus',function(){

  const inputDepartamento = document.getElementById('departamento');
  inputDepartamento.style.backgroundColor="green";
});

document.getElementById('').addEventListener('blur',function(){

  const inputDepartamento = document.getElementById('departamento');
  inputDepartamento.style.backgroundColor="white";
}); */

function adicionarCoraoFocarInput(){

  const listInput = document.querySelectorAll("input");
  console.log(listInput.length);
  console.log(listInput);

  listInput.forEach(function(item){

    item.addEventListener('focus',function(){

      item.style.backgroundColor="green";

    });

    item.addEventListener('blur',function(){

      item.style.background="none";

    });

  })

}

function carregarCategorias(){

  const selectCategoria = document.getElementById('categoriaMotivo');
  selectCategoria.innerHTML="";


  
  categorias.forEach(function(categoria){

    var opt = document.createElement('option');
    opt.value=categoria.idCategoria;
    opt.text = categoria.Descricao;
    selectCategoria.add(opt);

  })

}

adicionarCoraoFocarInput();
carregarCategorias();

console.log(categorias)
