abstract class Race {
  private _name: string;
  private _dexterity: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race.addInstance();
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  private static addInstance() {
    this._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
