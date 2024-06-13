import Race from './Race';

class Dwarf extends Race {
  private static _createdDwarfInstances = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.addDwarfInstance();
  }

  private static addDwarfInstance() {
    this._createdDwarfInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdDwarfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
