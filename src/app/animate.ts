import { style , trigger, transition, animate, useAnimation, keyframes } from '@angular/animations';
import { slideInLeft, fadeInLeft } from 'ng-animate';


export let fade = trigger('fade', [
    transition('void => *', [style({ opacity: 0 }), animate('0.4s ease-in')]),
    transition('* => void', [style({ opacity: 1 }), animate('0.4s ease-out')])
] );

export let fadeIn = trigger('fadeInLeft', [transition('void => *', [
    animate('0.4s ease-out', keyframes([
      style({opacity: 0, transform: 'translateX(-10%)', offset: 0}),
      style({opacity: 1, transform: 'translateX(0)',     offset: 1})
    ]))])
] );
