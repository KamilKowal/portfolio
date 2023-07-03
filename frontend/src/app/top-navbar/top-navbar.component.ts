import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AdDirective } from '../directives/ad.directive';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  ngAfterViewInit() {
    const widgetOneRef = this.container.createComponent(PortfolioComponent);

}
  loadComponent(){
    console.log('laduje cos innego')
  }
  loadPortfolioComponent() {
    this.container.clear();
    console.log('laduje portfolio')
    const widgetOneRef = this.container.createComponent(PortfolioComponent);
    // widgetOneRef.setInput('name', 'profanis');
  }
  loadAboutComponent() {
    this.container.clear();
    console.log('laduje portfolio')
    const widgetOneRef = this.container.createComponent(AboutComponent);
    // widgetOneRef.setInput('name', 'profanis');
  }
  loadContactComponent(){
    this.container.clear();
    console.log('laduje kontakt')
    const widgetOneRef = this.container.createComponent(ContactComponent);
    // widgetOneRef.setInput('name', 'profanis');
  }
}
