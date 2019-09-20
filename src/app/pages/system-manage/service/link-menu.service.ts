import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpConfigService} from "../../config/httpConfig-service";

@Injectable({
  providedIn: 'root'
})
export class LinkMenuService {

  menuTreeUrl = this.config.getPrefix() + '/link_menu';
  constructor (private http: HttpClient,
               private config: HttpConfigService, ) {
  }
  linkMenu(menuid_parentid) {
    return this.http.post(this.menuTreeUrl, menuid_parentid);
  }
}
