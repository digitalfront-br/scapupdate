import { 
  trigger,
  transition,
  style,
  query,
  animate,
 } from '@angular/animations';

 export const fade = trigger('routeAnimations', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(':enter', 
    animate('100ms ease-out',
      style({
        opacity: 0,
        transform: 'scale(1)',
      })),
      { optional: true }
    ),
    query(':leave',
      animate('400ms ease-in',
        style({
          opacity: 0,
          transform: 'scale(1.3)',
        })),
        { optional: true }
    )
  ]),
])