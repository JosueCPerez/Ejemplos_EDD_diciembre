#ifndef NODO_LISTA_H
#define NODO_LISTA_H
#include <iostream>
using namespace std;

class nodo_lista
{
    public:
        nodo_lista(int valor);
        virtual ~nodo_lista();

        int valor;
        nodo_lista * siguiente;
        nodo_lista * anterior;
};

#endif // NODO_LISTA_H
