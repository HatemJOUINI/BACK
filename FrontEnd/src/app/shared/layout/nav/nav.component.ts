import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbMenuService, NbSidebarService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService,  
     private nbMenuService: NbMenuService,
    private router: Router,
    private dialogService: NbDialogService) { }

  ngOnInit() {
    this.nbMenuService.onItemClick()
    .pipe(
      filter(({ tag }) => tag === 'my-context-menu'),
      map(({ item: { title } }) => title),
    )
    .subscribe(title => {
      if (title === 'Logout') {
        localStorage.clear();
        this.router.navigate(['auth/login']);
      }
     
    });
  }
 toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
