import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
    Archetype.addInstance();
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  private static addInstance() {
    this._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
