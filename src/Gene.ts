import { Genetics } from "./Genetics";

export type GeneProps = {
  feature: string;
  dominance: number;
  genetics: Genetics;
  description: string;
};

export class Gene {
  private _feature: GeneProps["feature"];
  private _genetics: GeneProps["genetics"];
  private _dominance: GeneProps["dominance"];
  private _description: GeneProps["description"];

  constructor({ feature, genetics, dominance, description }: GeneProps) {
    this._feature = feature;
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

  get feature() {
    return this._feature;
  }

  get dominance() {
    return this._dominance;
  }

  get description() {
    return this._description;
  }
}
