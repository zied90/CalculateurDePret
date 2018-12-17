import { Component } from '@angular/core';
import { structure } from './structure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPret';
  model: structure={
    montant:0,
    interet:0,
    nbAnnees:0
  };
  PaiementMens:any;
  paiementTotal:any;
  totalInteret:any;
  message:string;
sendFeedback(): void {
  const principal = parseFloat(this.model.montant);
  const calculateInteret = parseFloat(this.model.interet) / 100 / 12;
  const calculPaiement = parseFloat(this.model.nbAnnees) * 12;

    // calcul Paiement mensuel

    const x = Math.pow(1 + calculateInteret, calculPaiement);
    const mensuel = (principal * x * calculateInteret) / (x - 1);

    if (isFinite(mensuel)) {
        this.PaiementMens = mensuel.toFixed(2);
        this.paiementTotal = (mensuel * calculPaiement).toFixed(2);
        this.totalInteret = ((mensuel * calculPaiement) - principal).toFixed(2);
    } else {
      this.message = true;

      setTimeout(()=>{
            this.message = false;
       }, 3000);
      }

    }

}

