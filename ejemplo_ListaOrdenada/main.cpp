#include <iostream>
#include "lista.h"

using namespace std;

int main()
{
    lista * lista_ordenada = new lista();
    lista_ordenada->insertar(10);
    lista_ordenada->insertar(4);
    lista_ordenada->insertar(7);
    lista_ordenada->insertar(6);
    lista_ordenada->insertar(16);
    lista_ordenada->insertar(18);
    lista_ordenada->insertar(15);
    lista_ordenada->insertar(2);
    lista_ordenada->insertar(2);
    lista_ordenada->mostrar();

    cout << "Hello world!" << endl;
    return 0;
}
