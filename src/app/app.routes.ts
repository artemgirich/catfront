import { Routes } from '@angular/router';
import { CatAnecComponent } from './cat-anec/cat-anec.component';
import { CatItemsComponent } from './cat-items/cat-items.component';
import { CatFactsComponent } from './cat-facts/cat-facts.component';
import { CatStrishComponent } from './cat-strish/cat-strish.component';
import { CatPrimComponent } from './cat-prim/cat-prim.component';
import { CatPorodComponent } from './cat-porod/cat-porod.component';
import { CatKlichComponent } from './cat-klich/cat-klich.component';

export const routes: Routes = [{
    path: 'cat-anec',
    component: CatAnecComponent,
},{
    path: 'cat-items',
    component: CatItemsComponent
},{
    path: 'cat-facts',
    component: CatFactsComponent
},{
    path: 'cat-strish',
    component: CatStrishComponent
},{
    path: 'cat-prim',
    component: CatPrimComponent
},{
    path: 'cat-porod',
    component: CatPorodComponent
},{
    path: 'cat-klich',
    component: CatKlichComponent
}
];
