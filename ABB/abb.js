class nodo{
    constructor(dato){
        this.dato = dato;
        this.izq = null;
        this.der = null;
    }
}

class abb{
    constructor(){
        this.raiz = null;
    }

    insertar(valor){
        let nuevo = new nodo(valor);

        if(this.raiz == null){
            this.raiz= nuevo;
        }else{
            this.raiz = this.insertar_nodo(this.raiz,nuevo);
        }
    }

    insertar_nodo(raiz_actual,nuevo){
        if(raiz_actual != null){
            //recorrer hijos
            if(raiz_actual.dato > nuevo.dato){
                raiz_actual.izq = this.insertar_nodo(raiz_actual.izq,nuevo);

            }else if(raiz_actual.dato < nuevo.dato){
                raiz_actual.der = this.insertar_nodo(raiz_actual.der,nuevo);
            }else{
                console.log("NO SE PUEDE INSERTAR EL DATO PORQUE YA EXISTE");
            }

            return raiz_actual;
        }else{
            raiz_actual = nuevo;
            return raiz_actual;
        }
    }

    preorden(raiz_actual){
        if(raiz_actual != null){
            console.log(raiz_actual.dato);
            this.preorden(raiz_actual.izq);
            this.preorden(raiz_actual.der);
        }
    }

    inOrden(raiz_actual){
        if(raiz_actual != null){
            this.inOrden(raiz_actual.izq);
            console.log(raiz_actual.dato);
            this.inOrden(raiz_actual.der);
        }
    }

    postOrden(raiz_actual){
        if(raiz_actual != null){
            this.postOrden(raiz_actual.izq);
            this.postOrden(raiz_actual.der);
            console.log(raiz_actual.dato);
        }
    }

    generarDot(){
        let cadena="digraph arbol {\n";
        cadena+= this.generar_nodos(this.raiz);
        cadena+="\n";
        cadena+=this.enlazar(this.raiz);
        cadena+="\n}";

        console.log(cadena);
    }

    generar_nodos(raiz_actual){ //metodo preorden
        let nodos ="";
        if(raiz_actual != null){
            nodos+= "n"+raiz_actual.dato+"[label=\""+raiz_actual.dato+"\"]\n";
            nodos+=this.generar_nodos(raiz_actual.izq);
            nodos+=this.generar_nodos(raiz_actual.der);
        }
        return nodos;
    }

    enlazar(raiz_actual){
        let cadena="";
        if(raiz_actual != null){
            cadena += this.enlazar(raiz_actual.izq);
            cadena += this.enlazar(raiz_actual.der);
            //validaciones
            if(raiz_actual.izq != null){
                cadena+="n"+raiz_actual.dato + "-> n"+raiz_actual.izq.dato+"\n";
            }
            if(raiz_actual.der != null){
                cadena+="n"+raiz_actual.dato + "-> n"+raiz_actual.der.dato+"\n";
            }

            
        }
        return cadena;
    }
}

arbol = new abb();
arbol.insertar(30);
arbol.insertar(40);
arbol.insertar(20);
arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(70);
arbol.insertar(7);
arbol.insertar(100);
console.log("***RECORRIDO PREORDEN****");
arbol.preorden(arbol.raiz);
console.log("***RECORRIDO InOrden****");
arbol.inOrden(arbol.raiz);
console.log("***RECORRIDO PostOrden****");
arbol.postOrden(arbol.raiz);

arbol.generarDot();
