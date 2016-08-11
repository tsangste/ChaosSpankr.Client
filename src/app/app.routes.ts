import { CardListComponent } from './card-list';
import { ClientArrivalComponent } from './client-arrival';

export const CardAppRoutes = [
    {path: '', component: ClientArrivalComponent},
    {path: 'cards', component: CardListComponent}
];
