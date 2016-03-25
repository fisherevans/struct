import {Component, OnInit} from "angular2/core";
import {CardDBService} from "../../services/card-db.service";
import {SerializeService} from "../../services/serialize.service";
import {Deck} from "../../classes/deck.class";
import {StateService} from "../../services/state.service";
import {Router} from "angular2/router";

@Component({
    selector: 'create',
    templateUrl: 'app/components/create/create.component.html',
    styleUrls: ['app/components/create/create.component.css']
})

export class CreateComponent implements OnInit {
    input:string = "";
    error:string = null;

    constructor(private _serializeService: SerializeService,
                private _stateService: StateService,
                private _router:Router) {
        this.input += "# Deck: Some Name\n";
        this.input += "# A nice little new deck...\n";
        this.input += "\n";
        this.input += "# Board: Mainboard\n";
        this.input += "# The main deck...\n";
        this.input += "2x Abzan Beastmaster\n";
        this.input += "2x Accorder's Shield\n";
        this.input += "4x Assault Formation\n";
        this.input += "1x Brave the Sands\n";
        this.input += "2x Caravan Vigil\n";
        this.input += "2x Courser of Kruphix\n";
        this.input += "2x Disowned Ancestor\n";
        this.input += "2x Doran, the Siege Tower\n";
        this.input += "2x Dragon's Eye Sentry\n";
        this.input += "2x Evolution Charm\n";
        this.input += "4x Evolving Wilds\n";
        this.input += "5x Forest\n";
        this.input += "2x Mortify\n";
        this.input += "2x Overgrown Battlement\n";
        this.input += "4x Plains\n";
        this.input += "2x Prison Term\n";
        this.input += "2x Putrefy\n";
        this.input += "2x Seraph of Dawn\n";
        this.input += "2x Sheltering Word\n";
        this.input += "3x Swamp\n";
        this.input += "4x Terramorphic Expanse\n";
        this.input += "2x Tower Defense\n";
        this.input += "2x Tree of Redemption\n";
        this.input += "1x True Conviction\n";
        this.input += "2x Wall of Blossoms\n";
    }

    reset() {
        this.error = null;
        this.input = "";
        this.input += "# Deck: Some Name\n";
        this.input += "# A short little description\n";
        this.input += "\n";
        this.input += "# Board: Mainboard\n";
        this.input += "# The main deck...\n";
        this.input += "4x Forest\n";
    }

    loadFile(event) {
        this.error = null;
        var file:File = event.target.files[0];
        var myReader:FileReader = new FileReader();
        myReader.onloadend = (e) => {
            this.input = myReader.result;
        };
        myReader.onerror = (e) => {
            this.error = "Please select a valid text file";
        };
        try {
            myReader.readAsText(file);
        } catch(err) {
            this.error = "Please select a valid text file.";
        }
    }

    open() {
        this.error = null;
        try {
            var deck:Deck = this._serializeService.parseDeck(this.input.split("\n"));
            this._stateService.setDeck(deck);
            this._router.navigate(['Deck']);
        } catch (err) {
            console.log(err);
            this.error = err;
        }
    }

    ngOnInit() {
    }
}