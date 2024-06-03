import  {Database} from "../models/Database";   
import {Veicolo} from "../models/Veicolo";
export class ParcheggiController
{
    private db : Database;
    constructor()
    {
        this.db=new Database();
    }
    getAll() : Veicolo[]
    {
        return this.db.parcheggio.veicoli.filter(v=>v.uscita==undefined)
    }
    getNumber() : number
    {
        return this.getAll().length;
    }
    newVeicolo(targa:string):string
    {
        if (!this.getAll().some(v=>v.targa==targa))
        {
            this.db.parcheggio.veicoli.push(new Veicolo(targa));
            return ("Veicolo "+targa+" inserito");
        }else
        {
            return ("Veicolo "+targa+" già esistente");
        }
       
    }
}