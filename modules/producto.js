export default class Producto{
    constructor(nombre,descripcion,cantidad,costo){
        this.codigo = Date.now();
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    codigo(){
        return this.codigo;
    }

    nombre(){
        return this.nombre;
    }

    descripcion(){
        return this.cantidad;
    }

    costo(){
        return this.costo;
    }
}