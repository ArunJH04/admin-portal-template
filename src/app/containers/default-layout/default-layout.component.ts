import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(private router: Router, @Inject(DOCUMENT) _document?: any) {
    this.changes = new MutationObserver(mutations => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit() {
    console.log(navItems);
  }

  logoutUser() {
    localStorage.removeItem('accessLevel');
    localStorage.removeItem('userType');

    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
