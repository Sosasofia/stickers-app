import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sticker } from "../sticker";

@Injectable({
  providedIn: "root"
})
export class StickersService {
  configUrl = "api/stickers";

  constructor(private http: HttpClient) {}

  public getData(searchTerm: string): Observable<Sticker> {
    return this.http.get<Sticker>(this.configUrl, {
      params: { q: searchTerm }
    });
  }
}
