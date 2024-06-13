import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _createdWarriorInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior.addWarriorInstance();
    this._energyType = 'stamina';
  }

  private static addWarriorInstance() {
    this._createdWarriorInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdWarriorInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
