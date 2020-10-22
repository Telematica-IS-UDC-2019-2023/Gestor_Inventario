export default class Inventario{
    constructor(){
        this.productos = [];
    }

    productos(){
        return this.productos;
    }

    listProducts(){
        return this.productos.length;
    }

    addProduct(producto){
        if(this.productos.length >= 20){
            interfacex.showMsg('El producto no se ha podido agregar');
            return;
        }else {
            this.productos.push(producto);

            console.log(this.productos)
            return;
         }
    }

    changePosition(position,producto){
        if(position < 20 && producto <= this.productos.length){
            this.productos.splice(position-1,0,producto)
        } else {
            alert('No hay espacio disponible')
        }
       
    }

    delProduct(codigo){
        let deleted = false;

        this.productos.forEach((producto, indice) => {
            if(producto.codigo === codigo) {
                deleted = true;
                this.productos.splice(indice,1);
            }
        })
        return deleted;
    }

    searchProd(codigo){
        const producto = this.productos.filter(producto => producto.codigo === codigo);

        return producto;
    }
}