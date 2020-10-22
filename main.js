import Producto from './modules/producto.js';
import Inventario from './modules/inventario.js';
import Interface from './modules/interface.js';

const interfacex = new Interface();
const inventario = new Inventario();

const formAdd = document.querySelector('#form-add');
const formDel = document.querySelector('#form-del');
const formSearch = document.querySelector('#form-search');
const formCambiarPos = document.querySelector('#form-change')
const btnListar = document.querySelector('#btn');
const btnListarInverse = document.querySelector('#btn2');

formAdd.addEventListener('submit', validar);
formDel.addEventListener('submit', delArticle);
formSearch.addEventListener('submit', searchArticle);
formCambiarPos.addEventListener('submit', changePos)
btnListar.addEventListener('click', listProd);
btnListarInverse.addEventListener('click', listProd2);


function validar(d) {
    d.preventDefault();


    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value
    const cantidad = document.getElementById('cantidad').value
    const costo = Number(document.getElementById('costo').value);
    
    if (inventario.listProducts() >= 20){
        interfacex.showMsg('Limite de stock de productos agregados', 'error');
    } else {
    
        if(nombre === '' || descripcion === '' || cantidad === '' || costo === '') {
            interfacex.showMsg('Cada uno de los campos deben estar llenos', 'error');
        } else if (isNaN(cantidad) || cantidad <= 0) {
            interfacex.showMsg('Ingrese una cantidad valida', 'error');
        } else if (costo <= 0 || isNaN(costo)){
            interfacex.showMsg('Ingrese una cantidad valida', 'error');
        } else {
            const newProduct = new Producto(nombre,descripcion,cantidad,costo);
            inventario.addProduct(newProduct);
            interfacex.showMsg('Agrego un nuevo producto +', 'actions')
        }
    

        setTimeout(() =>{
            cleanForms();
        }, 1000)
    }
    
}

function delArticle(d) {
    d.preventDefault();

    const codigo = Number(document.querySelector('#codeDel').value);
    if(inventario.delProduct(codigo)){
        alert('Articulo eliminado con exito!');
        interfacex.showMsg('Un articulo se ha eliminado -', 'actions')
        return;
    } else {
        alert('Articulo no se ha podido eliminar')
    }

    setTimeout(() => {
        cleanForms();
    }, 1000)
}

function searchArticle(d){
    d.preventDefault();

    const codigoProducto = Number(document.querySelector('#codeSearch').value);
    const productos = inventario.searchProd(codigoProducto);

    for(let producto of productos) {
        interfacex.showProd(producto);
        interfacex.showMsg('Se busco un articulo', 'actions')
    }

    setTimeout(() => {
        cleanForms();
    }, 1000)
}

function listProd(){
    delElements();

    for(let producto of inventario.productos){
        interfacex.listProd(producto)
        
    }
    interfacex.showMsg('Se listaron los articulos', 'actions')
}

function changePos(d){
    d.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value
    const cantidad = document.getElementById('cantidad').value
    const costo = Number(document.getElementById('costo').value);
    

    if(nombre === '' || descripcion === '' || cantidad === '' || costo === '') {
        interfacex.showMsg('Cada uno de los campos deben estar llenos');
    } else if (isNaN(cantidad) || cantidad <= 0) {
        interfacex.showMsg('Ingrese una cantidad valida');
    } else if (costo <= 0 || isNaN(costo)){
        interfacex.showMsg('Ingrese una cantidad valida');
    } else {
        var pos = document.querySelector('#prodChanger')
        const nProd = new Producto(nombre,descripcion,cantidad,costo);
        //inventario.addProduct(nProd)
        inventario.addProduct(nProd)
        inventario.changePosition(Number(pos.value),nProd)
        interfacex.listProd(nProd)
        

    }


    setTimeout(() =>{
        cleanForms();
    }, 1500)
        
    
    

}


function listProd2(){
    delElements();

    for(let producto of inventario.productos.reverse()){
        interfacex.listProd(producto)
    }
    interfacex.showMsg('Se listaron los articulos de manera inversa', 'actions')
}

function delElements(){
    const list = document.querySelector('#product-list');

    while(list.firstChild) {
        list.firstChild.remove(list.firstChild);
    }
}

function cleanForms(){
    
    formAdd.reset();
    formDel.reset();
    formSearch.reset();
    formCambiarPos.reset();
}