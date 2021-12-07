class nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class listaDoble{
    constructor(){
        this.primero = null;
    }

    insertar(dato){
        let nuevo = new nodo(dato); 

        if(this.primero == null){ //la lista esta vacia
            this.primero = nuevo;
        }else{
            let aux = this.primero;
            while(aux.siguiente != null){
                aux = aux.siguiente;
            };
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
        }
    }

    mostrar(){
        let aux = this.primero;
        console.log("***** Mostar Lista *****")
        while(aux != null){
            console.log("-> " + aux.dato);
            aux = aux.siguiente;
        }
    }
}

let lista = new listaDoble();

lista.insertar(10);
lista.insertar(12);
lista.insertar(7);
lista.insertar(5);
lista.mostrar();