import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

export default class PVP extends Battle {
  private _fighter2: Fighter;

  constructor(fighter1: Fighter, fighter2: Fighter) {
    super(fighter1);
    this._fighter2 = fighter2;
  }

  public fight(): number {
    while (this.player.lifePoints > 0 && this._fighter2.lifePoints > 0) {
      this.attackFighter1ToFighter2();
      if (this._fighter2.lifePoints > 0) {
        this.attackFighter2ToFighter1();
      }
    }
    return super.fight();
  }

  private attackFighter1ToFighter2(): void {
    if (this.player.attack) {
      this.player.attack(this._fighter2);
    }
  }

  private attackFighter2ToFighter1(): void {
    if (this._fighter2.attack) {
      this._fighter2.attack(this.player);
    }
  }
}
