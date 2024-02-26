import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/interfaces';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input({ required: true }) avatar: string | undefined = undefined;
}
