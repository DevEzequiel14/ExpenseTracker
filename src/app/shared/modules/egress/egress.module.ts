import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EgressComponent } from './egress.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../../../core/components/details/details.component';
import { HeadingComponent } from '../../../core/components/heading/heading.component';


@NgModule({
  imports: [
    CommonModule,
    HeadingComponent,
    DetailsComponent,
    RouterModule.forChild([{ path: '', component: EgressComponent }])
  ],
  declarations: [EgressComponent]
})
export class EgressModule { }
