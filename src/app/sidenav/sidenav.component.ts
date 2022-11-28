import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { transition, trigger, animate, style } from '@angular/animations';
import { NavigationStart, Router, Event } from '@angular/router';
import { Location } from '@angular/common'


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
  
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('2000ms',
          style({ opacity: 0 })
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  ocultado = true;
  isScreenLogin = true;
  fruits: string[] = ['/my-projects', '/login', '/my-stories','/dashboard', '/', '/settings'];

  constructor(private location: Location, private router: Router) {

   // router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(event : NavigationStart => { console.log(event) })

   this.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationStart) {
      this.ocultado = this.fruits.includes(event.url)
      this.isScreenLogin = event.url == '/login' || event.url == '/' 
      
      console.log("url: " + event.url);
      console.log("ocultado: " + this.ocultado)
      console.log("pantalla login: " + this.isScreenLogin)
    }
});
    

  }


  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  goBack(): void {
    this.location.back();
  }

}
