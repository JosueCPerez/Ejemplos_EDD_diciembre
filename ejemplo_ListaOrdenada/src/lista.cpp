#include "lista.h"

lista::lista()
{
    this->inicio = NULL;
    this->ultimo = NULL;
}

void lista::insertar(int dato){
    nodo_lista * nuevo = this->crear_nodo(dato);

    if(this->inicio == NULL){
        this->inicio = nuevo;
        this->ultimo = nuevo;
    }else{
        if(nuevo->valor < this->inicio->valor){
            nuevo->siguiente = this->inicio;
            this->inicio->anterior = nuevo;
            this->ultimo = this->inicio;
            this->inicio = nuevo;
        }else if(nuevo->valor > this->ultimo->valor){
            nuevo->anterior = this->ultimo->anterior;
            nuevo->siguiente = NULL;
            this->ultimo->siguiente = nuevo;
            this->ultimo = nuevo;
        }else{
            nodo_lista * aux= this->inicio;
            do{
                if(nuevo->valor < aux->valor){
                    aux->anterior->siguiente = nuevo;
                    nuevo->anterior = aux->anterior;
                    nuevo->siguiente = aux;
                    aux->anterior = nuevo;
                    break;
                }
                aux= aux->siguiente;
            }while(aux != NULL);
        }
    }

}

void lista::mostrar(){
    nodo_lista * aux = this->inicio;

    while(aux != NULL){
        cout<<"->"<<aux->valor<<endl;
        aux = aux->siguiente;
    }
}

nodo_lista * lista::crear_nodo(int dato){
    nodo_lista * nuevo = new nodo_lista(dato);
    return nuevo;
}

