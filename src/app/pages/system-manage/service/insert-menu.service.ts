import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpConfigService} from "../../config/httpConfig-service";

@Injectable({
  providedIn: 'root'
})
export class InsertMenuService {

  menuTreeUrl = this.config.getPrefix() + '/insert_menu';
  constructor (private http: HttpClient,
               private config: HttpConfigService, ) {
  }
  insertMenu(menu) {
    return this.http.post(this.menuTreeUrl, menu);
  }
}
