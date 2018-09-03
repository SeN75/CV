import { style , trigger, transition, animate } from '@angular/animations';

export let fade = trigger('fade', [
    transition('void => *', [style({ opacity: 0 }), animate('0.4s ease-in')]),
    transition('* => void', [style({ opacity: 1 }), animate('0.4s ease-out')])
] );
