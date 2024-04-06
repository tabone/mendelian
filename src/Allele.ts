import { Genetics } from "./Genetics";

export type AlleleProps = {
  trait: string;
  dominance: number;
  genetics: Genetics;
  description: string;
};

export class Allele {
  private _trait: AlleleProps["trait"];
  private _genetics: AlleleProps["genetics"];
  private _dominance: AlleleProps["dominance"];
  private _description: AlleleProps["description"];

  constructor({ trait, genetics, dominance, description }: AlleleProps) {
    this._trait = trait;
    this._genetics = genetics;
    this._dominance = dominance;
    this._description = description;
  }

  get genetics() {
    return this._genetics;
  }

  get random() {
    return this._genetics.random;
  }

  get trait() {
    return this._trait;
  }

  get dominance() {
    return this._dominance;
  }

  get description() {
    return this._description;
  }
}
