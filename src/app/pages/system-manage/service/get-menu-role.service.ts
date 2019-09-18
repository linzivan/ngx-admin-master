import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpConfigService} from "../../config/httpConfig-service";

@Injectable({
  providedIn: 'root'
})
export class GetMenuRoleService {

  menuTreeUrl = this.config.getPrefix() + '/get_menu_role';
  constructor (private http: HttpClient,
               private config: HttpConfigService, ) {
  }
  getMenuRole(menu) {
    return this.http.post(this.menuTreeUrl, menu);
  }
}
