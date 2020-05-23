import { Component } from '@angular/core';

interface Icita{
    frase: string;
    autor: string;
}

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
cita: Icita;
show: boolean;
autores: string[] ;
constructor(){
    this.show = false;
    this.cita = {
        frase : `Qué es la vida? un frenesi` + `<br> ` + `
        Qué es la vida? una ilusion,` + `<br> ` + `una sombra una ficcion.` + `<br> ` + `
        Y el mayor bien es pequeño , que todo en la vida` + `<br> ` + `
        es sueño y los sueños sueños son.`,
        autor : ' Calderon de la Barca '
    };
    this.autores =  ['Ortega y Gasset', 'Francisco de Quevedo', 'Luis de Gongora'];
}
cambiar(){
    this.show = !this.show;
}



}
