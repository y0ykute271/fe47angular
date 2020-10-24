import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [],
  exports: [MatButtonModule, MatInputModule, MatPaginatorModule],
  imports: [CommonModule],
})
export class MaterialModule {}
