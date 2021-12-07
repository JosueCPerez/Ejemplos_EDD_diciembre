class nodo{
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
        let nuevo = new nodo(dato)

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
        console.log("***** Mostar Cola *****")
        while(aux != null){
            console.log("-> " + aux.dato)
            aux = aux.siguiente
        }
    }
}

let cola_nueva = new cola();

cola_nueva.enQueue(5)
cola_nueva.enQueue(2)
cola_nueva.enQueue(6)
cola_nueva.enQueue(8)

cola_nueva.mostrar_cola()

let frente = cola_nueva.deQueue();
console.log("frente -> "+frente.dato);

cola_nueva.mostrar_cola()
console.log("tamaño = "+cola_nueva.size)