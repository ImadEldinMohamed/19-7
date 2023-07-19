abstract class lavoratore {
     constructor(public codredd:number,public redditoannuolordo:number,public tasseinps:number, public tasseirpef:number){
        console.log(this.getannuoredditonetto())
    console.log(this.gettasseinps())
    console.log(this.gettasseirpef())
}

getutiletasse():number{
    return (this.codredd*this.redditoannuolordo)/100
}
gettasseinps():number{
    return (this.tasseinps*this.getutiletasse())/100
}
gettasseirpef():number{
    return  (this.tasseirpef*this.getutiletasse())/100
}
getannuoredditonetto():number{
    return this.redditoannuolordo-(this.gettasseinps()+this.gettasseirpef())
}




    }

    class dipendente extends lavoratore{
        constructor(public codredd:number, public redditoannuolordo:number,public tasseinps:number,public tasseirpef:number){
            super(0.80,12000,0.20,0.20)
        }
      
    }

let dipendente1:dipendente = new dipendente(0.80,12000,0.20,0.20)
console.log(dipendente1)


class autonomo extends lavoratore{
    
    constructor(public codredd:number, public redditoannuolordo:number,public tasseinps:number,public tasseirpef:number){
        super(0.78,18000,0.25,0.25)


}
 }
 

let autonomo1:autonomo= new autonomo(0.78,18000,0.25,0.25)
console.log(autonomo1)
