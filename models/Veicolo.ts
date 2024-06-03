export class Veicolo {
    ingresso:Date;
    uscita?:Date;
    importo?:number;
    constructor(readonly targa:string) 
    {
        this.ingresso = new Date();
    }
}