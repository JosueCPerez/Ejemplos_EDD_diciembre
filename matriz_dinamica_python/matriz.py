
class NodoCabecera:
    def __init__(self, indice):
        self.dato = indice
        self.sig= None
        self.ant=None
        self.listaInterna= listaDatos()

class NodoInterno:
    def __init__(self, dato,valorFila):
        self.dato = dato
        self.valorFila = valorFila
        self.sig = None
        self.ant = None

class matriz:
    def __init__(self):
        self.Columnas = ListaCabecera()

    def insertar(self,col,fila,valor):
        #buscar si la cabecera existe
        cabecera = self.Columnas.buscar(col)
         #si no existe creamos la cabecera
        if cabecera == None:
            cabecera = self.Columnas.insertar(col)

        #insertamos el dato a la lista de la cabecera
        cabecera.listaInterna.insertar_datos(valor,fila)

        return None

    def mostrar(self):
        self.Columnas.mostrar()


class ListaCabecera:
    def __init__(self):
        self.primero = None

    def insertar(self, dato):
        nuevo = NodoCabecera(dato)
        if self.primero == None:
            self.primero = nuevo
            return nuevo
        else:
            if nuevo.dato < self.primero.dato:
                nuevo.sig = self.primero
                self.primero.ant = nuevo
                self.primero = nuevo
                return nuevo
            else:
                if(self.primero.sig == None):
                    nuevo.ant = self.primero
                    self.primero.sig = nuevo
                    return nuevo
                else:
                    aux = self.primero
                    while(aux != None):
                        if nuevo.dato < aux.dato:
                            nuevo.sig = aux
                            nuevo.ant = aux.ant
                            aux.ant.sig = nuevo
                            aux.ant = nuevo
                            return nuevo
                        else:
                            aux = aux.sig
                
                return None

    def buscar(self, dato):
        aux = self.primero
        while aux != None:
            if(aux.dato == dato):
                return aux
            else: 
                aux = aux.sig
        
        return None

    def mostrar(self):
        aux = self.primero
        while aux != None:
            print(aux.dato)
            aux.listaInterna.mostrar_datos()
            aux = aux.sig
        
        return None

    
class listaDatos:
    def __init__(self):
        self.primero = None

    def insertar_datos(self, dato,fila):
        nuevo = NodoInterno(dato,fila)
        if self.primero == None:
            self.primero = nuevo
        else:
            if nuevo.valorFila < self.primero.valorFila:
                nuevo.sig = self.primero
                self.primero.ant = nuevo
                self.primero = nuevo
            else:
                if(self.primero.sig == None):
                    nuevo.ant = self.primero
                    self.primero.sig = nuevo
                    return nuevo
                else:
                    aux = self.primero
                    while(aux != None):
                        if nuevo.valorFila < aux.valorFila:
                            nuevo.sig = aux
                            nuevo.ant = aux.ant
                            aux.ant.sig = nuevo
                            aux.ant = nuevo
                            break
                        else:
                            aux = aux.sig
                
                return None
    
    def mostrar_datos(self):
        aux = self.primero
        while aux != None:
            print("     dato= "+str(aux.dato)+", fila: "+str(aux.valorFila))
            aux = aux.sig
        
        return None


m = matriz()

m.insertar(5,5,3)
m.insertar(1,5,7)
m.insertar(3,2,8)
m.insertar(1,1,9)
m.mostrar()




'''listaPrueba = ListaCabecera()
listaPrueba.insertar(5)
listaPrueba.insertar(10)
listaPrueba.insertar(2)
listaPrueba.mostrar()

pruebita = listaPrueba.buscar(2)
print(pruebita.dato) 

listadatos = listaDatos()
listadatos.insertar_datos(5,2)
listadatos.insertar_datos(8,3)
listadatos.insertar_datos(10,1)
listadatos.mostrar_datos() '''
