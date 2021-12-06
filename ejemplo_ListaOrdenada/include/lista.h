#ifndef LISTA_H
#define LISTA_H
#include"nodo_lista.h"

class lista
{
    public:
        lista();

        nodo_lista * inicio;
        nodo_lista * ultimo;

        //metodos
        void insertar(int dato);
        void mostrar();
        nodo_lista * crear_nodo(int dato);

};

#endif // LISTA_H
