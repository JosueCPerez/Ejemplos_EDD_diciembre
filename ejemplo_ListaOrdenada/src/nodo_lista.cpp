#include "nodo_lista.h"

nodo_lista::nodo_lista(int valor)
{
    this->valor = valor;
    this->anterior = NULL;
    this->siguiente = NULL;
}

nodo_lista::~nodo_lista()
{
    //dtor
}
