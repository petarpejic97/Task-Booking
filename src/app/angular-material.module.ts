import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CalendarModule } from 'primeng/calendar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule( {
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        CalendarModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatSidenavModule,
        MatRadioModule,
        MatSelectModule,
        MatStepperModule,
        MatMenuModule,
        MatTabsModule
    ],
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        CalendarModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatSidenavModule,
        MatRadioModule,
        MatSelectModule,
        MatStepperModule,
        MatMenuModule,
        MatTabsModule
    ],
    providers: []
} )
export class AngularMaterialModule{

}