class nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
        this.pila = new pila();
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
                if(aux.dato==dato){
                    console.log("el valor ya existe, No se puede insertar");
                    return
                }
                aux = aux.siguiente;
            };
            if(aux.dato==dato){
                console.log("el valor ya existe, No se puede insertar");
                return
            }
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
        }
    }

    mostrar(){
        let aux = this.primero;
        console.log("***** Mostar Lista *****")
        while(aux != null){
            console.log("* " + aux.dato);
            aux.pila.mostrar_pila();
            aux = aux.siguiente;
        }
    }

    insetar_Pila(dato_lista,valor_insertar){
        let aux= this.primero;
        while(aux!= null){
            if(dato_lista == aux.dato){
                aux.pila.push(valor_insertar);
                console.log("se inserto el valor en la pila de "+aux.dato);
                return 
            }else{
                aux = aux.siguiente;
            }
        }
        console.log("no se encontro el dato en la lista")
        return null;
    }
    insertar_cola(dato_lista,dato_pila,valor_insertar){
        let aux= this.primero;
        while(aux!= null){
            if(dato_lista == aux.dato){
                aux.pila.insertar_cola(dato_pila,valor_insertar);
                console.log("se inserto el valor en la pila de "+aux.dato);
                return 
            }else{
                aux = aux.siguiente;
            }
        }
        console.log("no se encontro el dato en la lista")
        return null;
    }
}

//*****pila */
class nodoPila{
    constructor(dato){
        this.dato = dato;
        this.siguiente=null;
        this.cola = new cola();
    }
}
class pila{
    constructor(){
        this.tope=null;
        this.size=0;
    }
    push(dato){
        let nuevo = new nodoPila(dato);

        if(this.pila_vacia()){
            this.tope = nuevo;
            this.size++;
        }else{
            let aux = this.tope;
            nuevo.siguiente = aux;
            this.tope = nuevo;
            this.size++;
        }
    }
    pop(){
        let aux = this.tope;
        this.tope = this.tope.siguiente;
        this.size--;
        return aux;
    }
    peek(){
        return this.tope.dato;
    }
    pila_vacia(){
        if(this.tope==null){
            return true;
        }
        return false;
    }
    mostrar_pila(){
        let aux = this.tope;
        //console.log("***** Mostar Pila *****")
        while(aux != null){
            console.log("   -> " + aux.dato);
            aux.cola.mostrar_cola();
            aux = aux.siguiente;
        }
    }

    getSize(){
        return this.size;
    }

    insertar_cola(dato_pila,valor_insertar){
        let aux= this.tope;
        while(aux!= null){
            if(dato_pila == aux.dato){
                aux.cola.enQueue(valor_insertar);
                console.log("se inserto el valor en la cola de "+aux.dato);
                return 
            }else{
                aux = aux.siguiente;
            }
        }
        console.log("no se encontro el dato en la cola")
        return null;
    }
}
//****************** */

/*******Cola */
class nodo_cola{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
    }
}

class cola{
    constructor(){
        this.frente = null
        this.fondo = null
        this.size =0;
    }

    enQueue(dato){
        let nuevo = new nodo_cola(dato)

        if(this.frente == null){
            this.frente = nuevo
            this.fondo= nuevo
            this.size++
        }else{
            this.fondo.siguiente = nuevo
            this.fondo = nuevo
            this.size++
        }
    }

    deQueue(){
        let aux = this.frente;

        this.frente = this.frente.siguiente;
        this.size--;
        return aux;
    }

    mostrar_cola(){
        let aux = this.frente
        //console.log("***** Mostar Cola *****")
        while(aux != null){
            console.log("       -> " + aux.dato)
            aux = aux.siguiente
        }
    }
}
/*********** */

let lista = new listaDoble();

lista.insertar(202000166);
lista.insertar(202000166);
lista.insertar(202003894);
lista.insertar(202000194);
lista.insertar(199701857 );
lista.insetar_Pila(202000166,10);
lista.insetar_Pila(202000166,20);
lista.insetar_Pila(202000166,30);

lista.insertar_cola(202000166,10,111);
lista.insertar_cola(202000166,30,333);

lista.insetar_Pila(199701857,110);
lista.insetar_Pila(199701857,120);
lista.insetar_Pila(199701857,130);
lista.mostrar();
