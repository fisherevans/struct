import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/app/app.component'
import {CardDBService} from "./services/card-db.service";
import {SerializeService} from "./services/serialize.service";

bootstrap(AppComponent, [CardDBService, SerializeService]);