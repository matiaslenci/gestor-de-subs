import { Component, OnInit, computed } from '@angular/core';
import { initCollapses, initDropdowns } from 'flowbite';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user = computed(() => this.authSrv.currentUser());
  authStatus = computed(() => this.authSrv.authStatus());

  constructor(private authSrv: AuthService) {}
  ngOnInit(): void {
    initDropdowns();
    initCollapses();
  }

  onLogout() {
    this.authSrv.logout();
    window.location.reload();
  }
}
