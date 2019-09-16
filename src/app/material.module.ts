import {NgModule} from '@angular/core';
import {
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule
} from '@angular/material';


@NgModule({
    imports: [
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule
    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatToolbarModule,
        MatSidenavModule
    ]
})
export class MaterialModule {}
