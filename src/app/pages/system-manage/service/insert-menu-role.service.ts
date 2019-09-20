import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpConfigService} from "../../config/httpConfig-service";

@Injectable({
  providedIn: 'root'
})
export class InsertMenuRoleService {

  menuTreeUrl = this.config.getPrefix() + '/insert_menu_role';
  constructor (private http: HttpClient,
               private config: HttpConfigService, ) {
  }
  insertMenuRole(menu_role) {
    return this.http.post(this.menuTreeUrl, menu_role);
  }
}
