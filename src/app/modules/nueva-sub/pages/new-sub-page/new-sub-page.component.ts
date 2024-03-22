import { Component, OnInit } from '@angular/core';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  templateUrl: './new-sub-page.component.html',
  styleUrls: ['./new-sub-page.component.scss'],
})
export class NewSubPageComponent implements OnInit {
  search = '';
  constructor(public subsSrv: SubscripcionesService) {}
  ngOnInit(): void {
    this.subsSrv.getDefaultSub();
  }
}
