import { Component, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {} 
    
    ngOnInit() {
      console.log("Home ", window.location.href);
    }
}
