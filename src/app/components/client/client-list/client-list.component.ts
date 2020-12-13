import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { take } from 'rxjs/operators';

import { AppComponent } from 'src/app/app.component';
import { Client } from './../client.model';
import { ClientListService } from './client-list.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements AfterViewInit {

  spinner: boolean;
  // fakeClientList: any[];
  displayedColumns: string[] = ['id', 'name', 'age', 'city'];
  dataSource = new MatTableDataSource<Client>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(
    private clientlistService: ClientListService,
    private appComponent: AppComponent,
    private router: Router
  ) {
    this.spinner = true;
    this.dataSource = new MatTableDataSource<Client>();
    this.loadClientList();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.fakeClientList = this.getFakeList();
  }

  ngAfterViewInit() {
    this.spinner = false;
    // this.paginator = this.appComponent.translateTable(this.paginator);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private loadClientList() : any {
    this.spinner = true;
    this.clientlistService
      .getAll()
      .pipe(take(1))
      .subscribe(
        (data: any) => {
          console.log(data);
          this.dataSource = new MatTableDataSource(data);
          return data;
        },
        (error: any) => {
          debugger;
          console.log(error);
          return null;
        },
        () => {
          this.spinner = false;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
      );

  }

  private getFakeList(): any[] {
    return [
      {"id": 1, "name": "Caroline Westernick", "age": 21, "city": "NYC"},
      {"id": 2, "name": "Adam Mengol", "age": 31, "city": "London"},
      {"id": 4, "name": "João Maria José", "age": 25, "city": "Rio de Janeiro"},
      {"id": 5, "name": "Sebastian Urel", "age": 27, "city": "Toronto"},
      {"id": 6, "name": "Leon Colda Dongal", "age": 22, "city": "Ibiza"},
      {"id": 11, "name": "Ted Honda Connel", "age": 33, "city": "Amsterdam"},
      {"id": 13, "name": "Loriel Merita", "age": 24, "city": "Berlim"},
      {"id": 14, "name": "Spliker Sonik", "age": 46, "city": "Tokio"},
      {"id": 15, "name": "Fernando Ogawa", "age": 30, "city": "Porto Alegre"},
      {"id": 17, "name": "Abdul Hamid", "age": 48, "city": "Daca"},
      {"id": 18, "name": "Ariston Alex", "age": 25, "city": "Kaohsiung"},
      {"id": 21, "name": "Chris Arthus", "age": 22, "city": "Naipidau"},
      {"id": 22, "name": "Katty Deanna", "age": 19, "city": "Hanói"},
      {"id": 23, "name": "Emily Ethel", "age": 38, "city": "Katmandu"},
      {"id": 25, "name": "Nico Teofil", "age": 38, "city": "Naggu"},
      {"id": 30, "name": "Calvin Joseph", "age": 38, "city": "Kabul"},
      {"id": 32, "name": "Amberlee Thomas", "age": 38, "city": "Bagdá"},
      {"id": 33, "name": "Jacob Tyler", "age": 38, "city": "Paris"}
    ];
  }

}
