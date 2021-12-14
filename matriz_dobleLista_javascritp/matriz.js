class nodo_interno{
    constructor(valor,x,y){
        this.valor = valor;
        this.x = x;
        this.y = y;
        //apuntadores
        this.sig = null;
        this.ant = null;

        this.arriba = null;
        this.abajo = null;
    }
}

class lista_interna{
    constructor(){
        this.primero = null;
    }

    insertar_x(valor, x,y){ //para las X usamos sig y ant, y el valor para compara y ordenar es Y
        let nuevo = new nodo_interno(valor,x,y);

        if(this.primero == null){
            this.primero = nuevo;
        }else{
            if(nuevo.y < this.primero.y){
                nuevo.sig = this.primero;
                this.primero.ant = nuevo;
                this.primero = nuevo;
            }else{
                let aux = this.primero;
                while(aux != null){
                    if(nuevo.y < aux.y){
                        nuevo.sig = aux;
                        nuevo.ant = aux.ant;
                        aux.ant.sig = nuevo;
                        aux.ant= nuevo;
                        break;
                    }else if(nuevo.x == aux.x && nuevo.y == aux.y){
                        console.log("La posicion ya esta ocupada-> "+nuevo.x+","+nuevo.y);
                        break;
                    }else{
                        if(aux.sig ==null){
                            aux.sig=nuevo;
                            nuevo.ant = aux;
                            break;
                        }else{
                            aux = aux.sig;
                        }
                    }
                }
            }
        }
    }

    insertar_y(valor, x,y){ //para las Y usamos arriba y abajo, y el valor para compara y ordenar es X
        let nuevo = new nodo_interno(valor,x,y);

        if(this.primero == null){
            this.primero = nuevo;
        }else{
            if(nuevo.x < this.primero.x){
                nuevo.abajo = this.primero;
                this.primero.arriba = nuevo;
                this.primero = nuevo;
            }else{
                let aux = this.primero;
                while(aux != null){
                    if(nuevo.x < aux.x){
                        nuevo.abajo = aux;
                        nuevo.arriba = aux.arriba;
                        aux.arriba.abajo = nuevo;
                        aux.arriba= nuevo;
                        break;
                    }else if(nuevo.x == aux.x && nuevo.y == aux.y){
                        console.log("La posicion ya esta ocupada-> "+nuevo.x+","+nuevo.y);
                        break;
                    }else{
                        if(aux.abajo ==null){
                            aux.abajo=nuevo;
                            nuevo.arriba = aux;
                            break;
                        }else{
                            aux = aux.abajo;
                        }
                    }
                }
            }
        }
    }

    recorrer_x(){
        let aux = this.primero;
        while(aux != null){
            console.log("valor =",aux.valor," - x = ",aux.x , " y = ",aux.y);
            aux = aux.sig;
        }
    }
    recorrer_y(){
        let aux = this.primero;
        while(aux != null){
            console.log("valor =",aux.valor," - x = ",aux.x , " y = ",aux.y);
            aux = aux.abajo;
        }
    }
}

//**************************** CABECERAS ************************/
class nodo_cabecera{
    constructor(dato){
        this.dato = dato;
        this.sig= null;
        this.ant = null;
        this.lista_interna = new lista_interna();
    }
}

class lista_cabecera{
    constructor(){
        this.primero = null;
    }

    insertar_cabecera(nuevo){

        if(this.primero == null){
            this.primero = nuevo;
        }else{
            if(nuevo.dato<this.primero.dato){
                nuevo.sig = this.primero;
                this.primero.ant=nuevo;
                this.primero = nuevo;
            }else{
                let aux = this.primero;
                while(aux != null){
                    if(nuevo.dato < aux.dato){
                        nuevo.sig = aux;
                        nuevo.ant = aux.ant;
                        aux.ant.sig = nuevo;
                        aux.ant = nuevo;
                        break;
                    }else{
                        if(aux.sig == null){
                            aux.sig = nuevo;
                            nuevo.ant = aux;
                            break;
                        }else{
                            aux = aux.sig;
                        }
                    }
                }
            }
        }
    }

    buscar_cabecera(dato){
        let aux = this.primero;
        while(aux != null){
            if(aux.dato == dato){
                return aux;
            }else{
                aux = aux.sig;
            }
        }
        return null;
    }

    recorrer(){
        let aux = this.primero;
        while(aux != null){
            console.log("dato =",aux.dato);
            aux = aux.sig;
        }
    }
}

//**************************** Matriz ************************/
class matriz{
    constructor(){
        this.cabecetas_x = new lista_cabecera();
        this.cabecetas_y = new lista_cabecera();
    }

    insertar(valor,x,y){
        let nodo_cabecera_X = this.cabecetas_x.buscar_cabecera(x);
        let nodo_cabecera_y = this.cabecetas_y.buscar_cabecera(y);

        if(nodo_cabecera_X == null){
            nodo_cabecera_X =  new nodo_cabecera(x);
            this.cabecetas_x.insertar_cabecera(nodo_cabecera_X);
        }

        if(nodo_cabecera_y == null){
            nodo_cabecera_y =  new nodo_cabecera(y);
            this.cabecetas_y.insertar_cabecera(nodo_cabecera_y);
        }

        //insertar en cabecera X
        nodo_cabecera_X.lista_interna.insertar_x(valor,x,y);
        //insertar en cabecera Y
        nodo_cabecera_y.lista_interna.insertar_y(valor,x,y);
    }

    recorrer_matriz(){
        console.log("cabeceras en X");
        let aux = this.cabecetas_x.primero;
        while(aux != null){
            console.log("   pos->"+aux.dato);
            let aux2 = aux.lista_interna.primero;
            while(aux2!= null){
                console.log("       -"+aux2.valor);
                aux2 = aux2.sig;
            }
            aux = aux.sig;
        }

        console.log("cabeceras en Y");
        aux = this.cabecetas_y.primero;
        while(aux != null){
            console.log("   pos->"+aux.dato);
            let aux2 = aux.lista_interna.primero;
            while(aux2!= null){
                console.log("       -"+aux2.valor);
                aux2 = aux2.abajo;
            }
            aux = aux.sig;
        }
    }
}

let matriz1 = new matriz();

matriz1.insertar(5,1,1);
matriz1.insertar(6,2,3);
matriz1.insertar(1,10,1);
matriz1.insertar(2,1,2);
matriz1.insertar(7,3,3);

matriz1.recorrer_matriz();
