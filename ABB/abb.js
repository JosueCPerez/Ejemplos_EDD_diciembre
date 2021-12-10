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
        nuevo = nodo(valor);

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
}