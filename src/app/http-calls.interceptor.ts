import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { LoaderService } from './shared/loader.service';
import { inject } from '@angular/core';

export const httpCallsInterceptor: HttpInterceptorFn = (req, next) => {

  const loaderService = inject(LoaderService);
  loaderService.toggleLoader();
  
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      loaderService.toggleLoader();
    }
  }));
};

