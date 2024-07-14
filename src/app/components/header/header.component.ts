import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  PLATFORM_ID,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  currentDateTime: Date;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.currentDateTime = new Date();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.currentDateTime = new Date();
      }, 1000);
    }
  }

  onToggleMenu() {
    this.menuToggle.emit();
  }
}
