

// document.getElementById('departamento').addEventListener('focus', function(){
//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor="#98FB98";    
// });

// document.getElementById('departamento').addEventListener('blur', function(){    
//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor="white"
// });

function adicionarCorAoFocarInput(){
    // const listInput = document.querySelectorAll("input[type=text]");
    const listInput = document.querySelectorAll("input");
    // console.log(listInput.length);
    // console.log(listInput);
    // listInput[2].style.backgroundColor="#98FB98"
    // for (let i = 0; i < listInput.length; i++) {
    //     listInput[i].style.backgroundColor="#98FB98"
    // }
    // listInput.forEach(function(item){
    //     item.style.backgroundColor="#98FB98"
    // })
     listInput.forEach(function(item){
        item.addEventListener('focus', function(){
            // item.style.backgroundColor="#98FB98";           
            item.style.outlineColor="#98FB98";           
        });

        item.addEventListener('blur', function(){
            // item.style.backgroundColor="white";           
            item.style.outlineColor="white";           
        });
    })
    

}

function carregarCategorias(){
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value=-1;
    optFirst.text="";
    selectCategoria.add(optFirst);

    categorias.forEach(function(categoria){
        const opt = document.createElement('option');
        opt.value=categoria.idCategoria;
        opt.text=categoria.Descricao;        
        selectCategoria.add(opt);
    });
}


function carregarMotivos(){
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML="";
    
    const optFirst = document.createElement('option');
    optFirst.value=-1;
    optFirst.text="";
    selectMotivo.add(optFirst);
    // words.filter((word) => word.length > 6);
    const valorCategoria =document.getElementById('categoriaMotivo').value;
    console.log("Categoria selecioinada: "+valorCategoria )
    const motivosFiltrados = motivos.filter((m)=> m.idCategoria==valorCategoria)

    motivosFiltrados.forEach(function(motivo){
        const opt = document.createElement('option');
        opt.value=motivo.idMotivo;
        opt.text=motivo.Descricao;        
        selectMotivo.add(opt);
    });
}

document.getElementById('categoriaMotivo').addEventListener('change',function(){
    carregarMotivos();
});

document.getElementById('CodigoProduto').addEventListener("keyup",function(){
    const codigoPesquisado = document.getElementById('CodigoProduto').value;
    let produtosFiltrados = produtos.filter((p)=> p.idProduto==codigoPesquisado);

    if (produtosFiltrados.length>0) {
        document.getElementById('DescricaoProduto').value=produtosFiltrados[0].Descricao;
        
    }else{
        document.getElementById('DescricaoProduto').value="";
    }
});




adicionarCorAoFocarInput();
carregarCategorias();

