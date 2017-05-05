import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,

} from '@angular/core';
// https://www.youtube.com/watch?v=-pFEzm_Jn-o
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)',
        backgroundColor: 'chocolate'
      })),
      state('active', style({
        transform: 'scale(1.3)',
        backgroundColor: 'crimson'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out')),
    ]),
    trigger('movePanel', [
      /* transition('void => *', [
             style({ transform:'translateY(-100%)' }),
             animate(300)
       ]),*/
      transition('void => *', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(25px)', offset: .70 }),
          style({ opacity: 1, transform: 'translateY(-5px)', offset: .80 }),
          style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })

        ]))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app works!';
  state: string = "inactive";
  toggleMove() {
    this.state =
      (this.state === 'inactive' ? 'active' : 'inactive')
  }
}
