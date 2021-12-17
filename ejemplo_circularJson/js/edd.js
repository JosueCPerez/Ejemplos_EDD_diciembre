/**********EDD's ****************************/
class nodo_doble{
    constructor(valor){
        this.dato = valor;
        this.siguiente = null;
        this.anterior = null;
        this.lista = new lista_doble();
    }
}

class lista_doble{
    constructor(){
        this.primero=null;
    }

    insertar(dato){
        let nuevo = new nodo_doble(dato);
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
            var valor = aux.dato;
            console.log('* '+valor);
            aux = aux.siguiente;
        }
    }

    insertar_anidado(buscar, valor){
        let aux = this.primero;
        while(aux != null){
            if(buscar == aux.dato){
                aux.lista.insertar(valor);
                break;
            }else{
                aux = aux.siguiente;
            }
        }
    }

    mostrar_anidada(){
        let aux = this.primero;
        console.log("***** Mostar Lista *****")
        while(aux != null){
            var valor = aux.dato;
            console.log('**'+valor);
            let aux2 = aux.lista.primero;
            while(aux2 != null){
                console.log("   -"+aux2.dato);
                aux2 = aux2.siguiente;
            }
            aux = aux.siguiente;
        }
    }
}

/***************************************** */

let lista_d = new lista_doble();


function insertar_Ldoble(){
    let nuevo_valor = document.getElementById('nuevo').value;
    console.log(nuevo_valor);
    lista_d.insertar(nuevo_valor);
    document.getElementById('nuevo').value="";
}

function imprimir_listaD(){
    lista_d.mostrar();
}

function ir_vista2(){
   // lista_d.insertar_anidado(1,10);
    var lista_temp = CircularJSON.stringify(lista_d);
    sessionStorage.setItem("lista_doble",JSON.stringify(lista_temp))
    location.href="./edd.html";
}

function recuperar_lista(){
    var lista_tem = JSON.parse(sessionStorage.getItem("lista_doble"));
    lista_d = new lista_doble();
    lista_tem = CircularJSON.parse(lista_tem);
    Object.assign(lista_d,lista_tem);

    let aux = lista_d.primero;
    while(aux!= null){
        var temp = aux.lista;
        var lista_anidada = new lista_doble();
        Object.assign(lista_anidada,temp);
        aux.lista = lista_anidada;
        aux = aux.siguiente;
    }
}

function instear_anidada(){
    var valor_principal = document.getElementById('nuevo').value;
    var valor_anidado = document.getElementById('nuevo_anidado').value;

    lista_d.insertar_anidado(valor_principal,valor_anidado);
}

function imprimir_anidada(){
    lista_d.mostrar_anidada();
}
