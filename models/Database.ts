import {Parcheggio} from "./Parcheggio";
import {Veicolo} from "./Veicolo";
export class Database 
{
    parcheggio:Parcheggio;
    constructor()
    {
        this.parcheggio=new Parcheggio("Rimini","Via Primo Levi",123,2);
        this.parcheggio.veicoli.push(new Veicolo("AA000AA"));
        this.parcheggio.veicoli.push(new Veicolo("BB000BB"));
    }
}