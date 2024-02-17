import { Component, OnInit, computed } from '@angular/core';
import {
  initAccordions,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTooltips,
} from 'flowbite';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user = computed(() => this.authSrv.currentUser());

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
