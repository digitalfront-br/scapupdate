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
        background: 'orange',
        opacity: 1,
        transform: 'scale(1) translateY(0) translateX(0)',
      })),
      { optional: true }
    ),
    query(':leave',
      animate('400ms ease-in',
        style({
          opacity: 0,
          transform: 'scale(2) translateY(10px) translateX(0)',
        })),
        { optional: true }
    )
  ]),
])