import { Component, OnInit } from "@angular/core";
import { StickersService } from "../../services/stickers.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  stickers: any = [];
  initializeSearch = "messi";

  constructor(private stickersService: StickersService) {}

  ngOnInit() {
    this.getData();
  }

  performSearch(searchTerm: HTMLInputElement): void {
    this.stickersService.getData(searchTerm.value).subscribe((res) => {
      this.stickers = res;
    });
  }

  getData(searchTerm = this.initializeSearch) {
    this.stickersService.getData(searchTerm).subscribe((res) => {
      this.stickers = res;
    });
  }
}
