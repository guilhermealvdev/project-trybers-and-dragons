import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _createdNecromancerInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer.addNecromancerInstance();
    this._energyType = 'mana';
  }

  private static addNecromancerInstance() {
    this._createdNecromancerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdNecromancerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
