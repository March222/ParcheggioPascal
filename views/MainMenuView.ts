import * as rl from 'readline-sync'
import { ParcheggiController } from '../controllers/ParcheggiController';
export class MainMenuView
{
    static show()
    {
        let controller=new ParcheggiController();
        let scelta:number=0;
        do{
        console.log('GESTIONE PARCHEGGIO'); 
        console.log('---------------------\n');
        console.log('1 - Elenco Veicoli');
        console.log('2 - Numero veicoli presenti\n');
        console.log('9 - Esci\n')

        scelta=rl.questionInt('Inserire la scelta:');

        switch(scelta)
        {
            case 1:
                controller.getAll().forEach(v=>console.log(`${v.targa} -Entrato ${v.ingresso}`));
                break;
            case 2:
                console.log(controller.getNumber());
                break;
            case 9:
                break;
            default:
                console.log('Scelta non valida');
                break;
        }
    }while(scelta!=9);
    }
}