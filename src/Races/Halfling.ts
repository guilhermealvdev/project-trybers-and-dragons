import Race from './Race';

class Halfling extends Race {
  private static _createdHalflingInstances = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.addHalflingInstance();
  }

  private static addHalflingInstance() {
    this._createdHalflingInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdHalflingInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
