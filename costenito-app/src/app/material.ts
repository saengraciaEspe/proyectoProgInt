import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from "@angular/forms";
import {MatCardModule} from '@angular/material/card';


@NgModule({
    imports:[MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, FormsModule, MatListModule, MatCardModule],
    exports:[MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, FormsModule, MatListModule, MatCardModule]
})

export class MaterialModule{}