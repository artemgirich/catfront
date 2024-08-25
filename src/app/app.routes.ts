import { Routes } from '@angular/router';
import { CatAnecComponent } from './cat-anec/cat-anec.component';
import { CatItemsComponent } from './cat-items/cat-items.component';
import { CatFactsComponent } from './cat-facts/cat-facts.component';
import { CatStrishComponent } from './cat-strish/cat-strish.component';
import { CatPrimComponent } from './cat-prim/cat-prim.component';
import { CatPorodComponent } from './cat-porod/cat-porod.component';
import { CatKlichComponent } from './cat-klich/cat-klich.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'cat-facts',
    pathMatch: 'full',
    data: { caption:"" },
},{
    path: 'cat-anec',
    component: CatAnecComponent,
    data: { caption:"анекдоты про котов" },
},{
    path: 'cat-items',
    component: CatItemsComponent,
    data: { caption:"предметы для котов" },
},{
    path: 'cat-facts',
    component: CatFactsComponent,
    data: { caption:"факты про котов" },
},{
    path: 'cat-strish',
    component: CatStrishComponent,
    data: { caption:"стришки для котов" },
},{
    path: 'cat-prim',
    component: CatPrimComponent,
    data: { caption:"приметы про котов" },
},{
    path: 'cat-porod',
    component: CatPorodComponent,
    data: { caption:"породы котов" },
},{
    path: 'cat-klich',
    component: CatKlichComponent,
    data: { caption:"клички для котов" },
}
];
