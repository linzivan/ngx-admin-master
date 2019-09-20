import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpConfigService} from "../../config/httpConfig-service";

@Injectable({
  providedIn: 'root'
})
export class GetMenuListService {

  menuTreeUrl = this.config.getPrefix() + '/get_menu_item';
  constructor (private http: HttpClient,
               private config: HttpConfigService, ) {
  }
  getMenuList() {
    return this.http.get<[]>(this.menuTreeUrl);
  }
}
