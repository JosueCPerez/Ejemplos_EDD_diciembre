class nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente=null;
    }
}

class pila{
    constructor(){
        this.tope=null;
        this.size=0;
    }
    push(dato){
        let nuevo = new nodo(dato);

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
        console.log("***** Mostar Pila *****")
        while(aux != null){
            console.log("-> " + aux.dato);
            aux = aux.siguiente;
        }
    }

    getSize(){
        return this.size;
    }
}

//codigo ejecutable

let pila_nueva = new pila();

pila_nueva.push(15);
pila_nueva.push(1);
pila_nueva.push(5);
pila_nueva.push(7);

pila_nueva.mostrar_pila();

console.log("tamaño = "+ pila_nueva.getSize());

let tope = pila_nueva.pop();

console.log("tope = "+ pila_nueva.peek())
pila_nueva.mostrar_pila();
console.log("tamaño = "+ pila_nueva.getSize());