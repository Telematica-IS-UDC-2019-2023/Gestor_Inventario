export default class Interface{
    constructor(){

    }

    showMsg(message,type){
        const first = document.querySelector('#msg1');
        const history =  document.querySelector('#history')
        const divMsg = document.createElement('div');
        divMsg.className = 'error';
        divMsg.innerHTML = `
        <p class='error'>${message}</p>
        <p>____________________________</p>`

        first.appendChild(divMsg);

        if(type === 'error'){
            first.appendChild(divMsg);
            return;
        } else if (type === 'actions') {
            history.appendChild(divMsg);
            return;
        }
        
        

        setTimeout(() => {
            divMsg.remove();
        }, 1500)
    }    

    showProd({codigo,nombre,descripcion,cantidad,costo}) {
        const first = document.querySelector('#historial');
        const div = document.createElement('div');

        div.innerHTML = ` 
        <p>Codigo: ${codigo}</p>
        <p>Nombre: ${nombre}</p>
        <p>Descripcion: ${descripcion}</p>
        <p>Cantidad: ${cantidad}</p>
        <p>Costo: ${costo}</p>
        `;

        first.appendChild(div);
    }

    listProd({codigo,nombre,descripcion,cantidad,costo}) {
        const first = document.querySelector('#product-list');
        const div = document.createElement('div');

        div.innerHTML = `
        <p>Codigo: ${codigo}</p>
        <p>Nombre: ${nombre}</p>
        <p>Descripcion: ${descripcion}</p>
        <p>Cantidad: ${cantidad}</p>
        <p>Costo: ${costo}</p>
        <p>Total: ${cantidad * costo}</p>
        <p>------------------------------</p>
        `;

        first.appendChild(div);
    }
}