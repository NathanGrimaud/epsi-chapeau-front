import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: Http) {}

  public postPicture(picture: Blob) {
    const form = new FormData();
    form.append('image', picture);
    return this.http.post(`${environment.image_api}/images`, form);
  }
}
