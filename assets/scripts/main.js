// document.getElementById('departamento').addEventListener('focus', () => {

//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor='#98FB98'
// })


// document.getElementById('departamento').addEventListener('blur', () => {

//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor='white'
// })



function adicionarCorAoFocarInput() {
    const ListInput = document.querySelectorAll('input')
    console.log(ListInput.length);
    console.log(ListInput);
    
    // Array.prototype.map.call(ListInput, (object)=>{
    //     object.style.backgroundColor='#98FB98'
    // });


    ListInput.forEach((object)=>{
        object.addEventListener('focus', ()=>{
            object.style.backgroundColor='#98FB98'
        });

        object.addEventListener('blur', ()=>{
            object.style.backgroundColor='white'
        });
    })
}


function LoadCate(){
    const selectCate = document.getElementById('categoriaMotivo');
    selectCate.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value = 0;
    optFirst.text = "Selecione uma Cetegoria";

    selectCate.add(optFirst);

    categorias.forEach((Categoria)=>{
        const opt = document.createElement('option');
        opt.value = Categoria.idCategoria;
        opt.text = Categoria.Descricao;

        selectCate.add(opt);
    });
}


function LoadMotivos(){
    const selectCate = document.getElementById('Motivo');
    selectCate.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value = 0;
    optFirst.text = "Selecione um Motivo";

    selectCate.add(optFirst);

    const categoriaValue = document.getElementById('categoriaMotivo').value;
    console.log(categoriaValue);
    const motivoFiltrado = motivos.filter((e)=> e.idCategoria == categoriaValue)

    motivoFiltrado.forEach((motivo)=>{
        const opt = document.createElement('option');
        opt.value = motivo.idCategoria;
        opt.text = motivo.Descricao;

        selectCate.add(opt);
    });
}

document.getElementById('categoriaMotivo').addEventListener('change', ()=>{
    LoadMotivos();
});

LoadMotivos();
LoadCate();
adicionarCorAoFocarInput();
