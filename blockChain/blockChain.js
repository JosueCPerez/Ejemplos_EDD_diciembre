const crypto = require('crypto');

class bloque{
    constructor(indice,data,previusHash){
        this.indice = indice;
        this.data = data;
        this.fecha = Date.now();
        this.previusHash = previusHash;
        this.hash = this.crearHash();
        this.nonce =0;

        this.prueba_de_trabajo(3);
    }

    crearHash(){
      //usar libreria
      return crypto.createHash('sha256').update(this.indice+this.data+this.fecha+this.previusHash+this.nonce).digest('hex');
    }

    prueba_de_trabajo(dificultad){
      while(this.hash.substring(0,dificultad) !== Array(dificultad+1).join("0")){
        this.nonce++;
        this.hash = this.crearHash();
        //console.log("->nonce " +this.nonce);
      }
      //console.log(this.hash);
      return this.hash;
    }
}

class cadena{
  constructor(){
    this.indice=0;
    this.cadena =[];
    this.cadena.push(this.Bloque_genesis());
  }

  Bloque_genesis(){
    let genesis = new bloque(this.indice,"bloque Genesis","");
    this.indice++;
    return genesis;
  }

  agregar(data){
    let nuevo = new bloque(this.indice,data,this.cadena[this.indice-1].hash);
    this.indice++;
    this.cadena.push(nuevo);
  }

  recorrer(){
    for(let item of this.cadena){
      console.log(item);
    }
  }
  
}

/*block = new bloque(0,"prueba",'00000000');
block.prueba_de_trabajo(2);
console.log(block);*/

let blockChain = new cadena();

let info=[]

let nueva_venta = {
  "id":3,
  "vendedor":"vendedor3",
  "cliente":"cliente1",
  "productos":[
    {
    "id":1,
    "cantidad":3
    }
  ]
};
info.push(nueva_venta)

info.push({
  "id":1,
  "vendedor":"vendedor1",
  "cliente":"cliente1",
  "productos":[
    {
    "id":1,
    "cantidad":3
    }
  ]
}
)
//console.log(blockChain.cadena);
blockChain.agregar(JSON.stringify(info));
info =[];
blockChain.agregar(JSON.stringify(info));
blockChain.recorrer();

