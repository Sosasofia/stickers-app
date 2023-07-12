import { Component, OnInit } from "@angular/core";
import { StickersService } from "../../services/stickers.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  stickers: any = [];
  limit = 40;
  offset = 0;
  page = 1;
  initializeSearch = "messi";
  loading = true;

  constructor(private stickersService: StickersService) {}

  ngOnInit() {
    this.getData();
  }

  performSearch(searchTerm: HTMLInputElement): void {
    this.loading = true;
    this.stickersService
      .getStickers(searchTerm.value, this.limit, this.offset)
      .subscribe((res) => {
        this.stickers = res;
        this.loading = false;
      });
  }

  getData() {
    this.stickersService
      .getStickers(this.initializeSearch, this.limit, this.offset)
      .subscribe((res) => {
        this.stickers = res;
        this.loading = false;
      });
  }

  changeToNextPage() {
    this.loading = true;
    this.offset = this.page * this.limit;
    this.page++;
    this.getData();
  }

  changeToPreviousPage() {
    this.loading = true;
    this.offset -= this.limit;
    this.page--;
    this.getData();
  }
}
