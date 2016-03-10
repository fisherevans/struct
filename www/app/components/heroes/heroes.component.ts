import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from '../../interfaces/hero.interface';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../../services/hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/heroes.component.html',
    styleUrls: ['app/components/heroes/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    public selectedHero: Hero;
    public heroes: Hero[];
    constructor(private _router: Router,
                private _heroService: HeroService) { }
    onSelect(hero: Hero) { this.selectedHero = hero; }
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    gotoDetail() {
        let link = ['HeroDetail', { id: this.selectedHero.id }];
        this._router.navigate(link);
    }
}