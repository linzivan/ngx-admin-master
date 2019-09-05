import {HttpClient} from "@angular/common/http";
import {HttpConfigService} from "../../config/httpConfig-service";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuTreeService {
  menuTreeUrl = this.config.getPrefix() + '/menu_tree';
  constructor (private http: HttpClient,
               private config: HttpConfigService, ) {
  }
  getMenuTree() {
    return this.http.get(this.menuTreeUrl);
  }
}
