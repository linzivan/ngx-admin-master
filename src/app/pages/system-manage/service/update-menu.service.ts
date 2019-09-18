import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpConfigService} from "../../config/httpConfig-service";

@Injectable({
  providedIn: 'root'
})
export class UpdateMenuService {

  menuTreeUrl = this.config.getPrefix() + '/update_menu';
  constructor (private http: HttpClient,
               private config: HttpConfigService, ) {
  }
  updateMenu(menu) {
    return this.http.post(this.menuTreeUrl, menu);
  }
}
