import Race from './Race';

class Orc extends Race {
  private static _createdOrcInstances = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.addOrcInstance();
  }

  private static addOrcInstance() {
    this._createdOrcInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdOrcInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
