import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  computed,
  effect,
} from '@angular/core';
import { IDefaultSub } from 'src/app/core/interfaces';
import { SubscripcionesService } from 'src/app/shared/services/subscripciones.service';

@Component({
  selector: 'app-card-new-sub',
  templateUrl: './card-new-sub.component.html',
  styleUrls: ['./card-new-sub.component.scss'],
})
export class CardNewSubComponent implements OnChanges {
  defaultSubs = computed(() => this.subsSrv.defaultSubs());

  listSubs: IDefaultSub[] = [];

  @Input({ required: true }) search: string = '';

  constructor(private subsSrv: SubscripcionesService) {
    this.setSub();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filterResults(changes['search'].currentValue);
  }

  filterResults(search: string) {
    this.listSubs = this.defaultSubs().filter((sub) =>
      sub.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  setSub() {
    effect(() => {
      this.listSubs = [...this.defaultSubs()];
    });
  }
}
