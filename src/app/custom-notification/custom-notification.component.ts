import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-notification',
  standalone: true,
  templateUrl: './custom-notification.component.html',
  styleUrls: ['./custom-notification.component.css']
})
export class CustomNotificationComponent {
  @Input() message: string = '';
  visible: boolean = false;
  sucess: boolean = true;

  show(message: string) {
    this.message = message;
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
    }, 3000);
  }
}
