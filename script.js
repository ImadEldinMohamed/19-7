"use strict";
class lavoratore {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
        console.log(this.getannuoredditonetto());
        console.log(this.gettasseinps());
        console.log(this.gettasseirpef());
    }
    getutiletasse() {
        return (this.codredd * this.redditoannuolordo) / 100;
    }
    gettasseinps() {
        return (this.tasseinps * this.getutiletasse()) / 100;
    }
    gettasseirpef() {
        return (this.tasseirpef * this.getutiletasse()) / 100;
    }
    getannuoredditonetto() {
        return this.redditoannuolordo - (this.gettasseinps() + this.gettasseirpef());
    }
}
class dipendente extends lavoratore {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        super(0.80, 12000, 0.20, 0.20);
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
let dipendente1 = new dipendente(0.80, 12000, 0.20, 0.20);
console.log(dipendente1);
class autonomo extends lavoratore {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        super(0.78, 18000, 0.25, 0.25);
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
let autonomo1 = new autonomo(0.78, 18000, 0.25, 0.25);
console.log(autonomo1);
