import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document: Document = inject(DOCUMENT);
  isDark = new BehaviorSubject<boolean>(true);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    let isDark = false;
    if (isPlatformBrowser(this.platformId)) {
      isDark = localStorage.getItem('isDark') == 'true';
    }

    if (isDark === true) {
      this.isDark.next(true);
      this.setDarkTheme();
    } else {
      this.isDark.next(false);
      this.setLightTheme();
    }
  }

  setDark(setDark: boolean): void {
    this.isDark.next(setDark);
    if (this.isDark?.getValue() === true) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  setLightTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('isDark', false.toString());
      document?.querySelector('html')?.classList.remove('dark');
      document?.querySelector('body')?.classList.remove('dark');
    }
  }

  setDarkTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('isDark', true.toString());
      document?.querySelector('html')?.classList.add('dark');
      document?.querySelector('body')?.classList.add('dark');
    }
  }
}
