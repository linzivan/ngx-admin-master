import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpConfigService} from "../../config/httpConfig-service";

@Injectable({
  providedIn: 'root'
})
export class DeleteMenuService {

  menuTreeUrl = this.config.getPrefix() + '/delete_menu';
  constructor (private http: HttpClient,
               private config: HttpConfigService, ) {
  }
  deleteMenu(menu) {
    return this.http.post(this.menuTreeUrl, menu);
  }
}
