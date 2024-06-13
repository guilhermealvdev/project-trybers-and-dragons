import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _createdRangerInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.addRangerInstance();
    this._energyType = 'stamina';
  }

  private static addRangerInstance() {
    this._createdRangerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdRangerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
