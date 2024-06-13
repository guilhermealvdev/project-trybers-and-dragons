import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _createdMageInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.addMageInstance();
    this._energyType = 'mana';
  }

  private static addMageInstance() {
    this._createdMageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdMageInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
