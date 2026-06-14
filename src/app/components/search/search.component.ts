import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import Fuse from 'fuse.js';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  wilayah: any[] = [];
  searchText = '';
  suggestions: any[] = [];
  searchTimeout: any;
  fuse!: Fuse<any>;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/wilayah.json').subscribe((data) => {
      this.wilayah = data;
      this.initializeFuse();
    });
  }

  initializeFuse() {
    this.fuse = new Fuse(this.wilayah, {
      keys: ['name', 'district', 'regency', 'province', 'label'],

      threshold: 0.2,

      ignoreLocation: true,
    });
  }

  search() {
    clearTimeout(this.searchTimeout);

    if (!this.fuse || this.searchText.trim().length < 2) {
      this.suggestions = [];

      return;
    }

    this.searchTimeout = setTimeout(() => {
      this.suggestions = this.fuse
        .search(this.searchText)
        .slice(0, 5)
        .map((result) => result.item);
    }, 500);
  }

selectWilayah(item: any) {

  this.searchText = item.label;

  this.suggestions = [];

  this.configService.setAdm4(item.code);

}

  clearSearch() {
    this.searchText = '';

    this.suggestions = [];
  }
}
