import { ChangeDetectorRef } from '@angular/core';

export class PageLoader {

  loading = true;

  constructor(private cdr: ChangeDetectorRef) {

    setTimeout(() => {
      this.loading = false;
      this.cdr.detectChanges();
    }, 1000);

  }

}