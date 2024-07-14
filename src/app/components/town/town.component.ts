import { Component, OnInit, inject } from '@angular/core';

import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { TownService } from '../../services/town.service';
import { ITown } from '../../interfaces/ITown';
import {MatDividerModule} from '@angular/material/divider';
import { TownModalComponent } from "../../modals/town-modal/town-modal.component";

@Component({
    selector: 'app-town',
    standalone: true,
    templateUrl: './town.component.html',
    styleUrl: './town.component.scss',
    imports: [AgGridAngular, MatDividerModule, TownModalComponent]
})
export class TownComponent implements OnInit {

  private townService=inject(TownService);
  towns=this.townService.towns;
  ngOnInit(): void {
    this.townService.getTowns().subscribe();
  }

  themeClass = "ag-theme-quartz";
  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<ITown>[] = [
    { headerName:"ID", field: "id", filter: true, checkboxSelection: true, resizable: true },
    { field: "name", floatingFilter: true, flex: 2, filter: true },
    { field: "longitude"},
    //{ field: "longitude", editable: true, valueFormatter: p => '£' + p.value.toLocaleString() },
    { field: "latitude" },
    { field: "altitude"}
    //{ field: "value", cellRenderer: (params: { value: number; })=>params.value > 1000 ? "LARGE VALUE" : "SMALL VALUE" },
  ];
}

