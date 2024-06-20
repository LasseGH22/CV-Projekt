import { Component, ViewChild } from '@angular/core';
import { CustomNotificationComponent } from '../custom-notification/custom-notification.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CustomNotificationComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @ViewChild('customNotification') customNotification!: CustomNotificationComponent;

  constructor() {
    this.customNotification = new CustomNotificationComponent();
  }

  CopyToClipboard(): void {
    const copyText = document.getElementById("Email");
  
    if (copyText) {
      navigator.clipboard.writeText(copyText.textContent || '')
        .then(() => {
          this.customNotification.sucess = true;
          this.customNotification.show("Email copied to clipboard");
        })
        .catch(err => {
          this.customNotification.sucess = false;
          console.error('Error in copying text: ', err);
          this.customNotification.show("Failed copy to clipboard");
        });
    } else {
      console.log("Element with ID 'Email' not found.");
    }
  }

}
