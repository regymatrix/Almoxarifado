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

function carregarMotivos(){

  const selectMotivo = document.getElementById('Motivo');
  selectMotivo.innerHTML="";

  const optFirst = document.createElement('option');
  optFirst.value=-1;
  optFirst.text="";
  selectMotivo.add(optFirst);

  const valorCategoria = document.getElementById('categoriaMotivo').value;
  const motivosFiltrados = motivos.filter((m)=>m.idCategoria==valorCategoria) 

  motivosFiltrados.forEach(function(motivo){

    var opt = document.createElement('option');
    opt.value= motivo.idMotivo;
    opt.text = motivo.Descricao;
    selectMotivo.add(opt);

  })

}

function carregarProduto(){

  const selectProduto = document.getElementById('tabelaItens');
  selectProduto.innerHTML="";

/*   const optFirst = document.createElement('option');
  optFirst.value=-1;
  optFirst.text="";
  selectMotivo.add(optFirst); */

  const valorId = document.getElementById('CodigoProduto').value;
  const produtoFiltrado = produtos.filter((m)=>m.idProduto==valorId) 

  if(produtoFiltrado.length>0){
    produtoFiltrado.forEach(function(produto){

      var opt = document.createElement('p');
      // opt.value= motivo.idMotivo;
      opt.text = produto.Descricao + " - " + produto.Estoque + " - " + produto.EstoqueMinimo;
      selectProduto.add(opt);

    })
  }

}

adicionarCoraoFocarInput();
carregarCategorias();
// carregarMotivos();

console.log(categorias)
