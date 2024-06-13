import Race from './Race';

class Elf extends Race {
  private static _createdElfInstances = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.addElfInstance();
  }

  private static addElfInstance() {
    this._createdElfInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdElfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
