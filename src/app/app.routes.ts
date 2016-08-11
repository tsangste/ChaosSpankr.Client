import { CardListComponent } from './card-list';
import { ClientArrivalComponent } from './client-arrival';
import { WaitingRoomComponent } from './waitingroom';

export const CardAppRoutes = [
    {path: '', component: ClientArrivalComponent},
    {path: 'waiting', component:WaitingRoomComponent},
    {path: 'cards', component: CardListComponent}
];
