import { Genetics } from "./Genetics";
import { Genotype } from "./Genotype";

export type CreatureProps = {
  genetics: Genetics;
  genotypes: Record<string, Genotype>;
};

export class Creature {
  private _genetics: CreatureProps["genetics"];
  private _genotypes: CreatureProps["genotypes"];

  constructor({ genetics, genotypes }: CreatureProps) {
    this._genetics = genetics;
    this._genotypes = genotypes;
  }

  get genetics() {
    return this._genetics;
  }

  get random() {
    return this._genetics.random;
  }

  get genotypes() {
    return { ...this._genotypes };
  }

  mate(otherCreature: Creature) {
    return new Creature({
      genetics: this._genetics,

      genotypes: (
        Object.keys(this._genotypes) as (keyof typeof this._genotypes)[]
      ).reduce<Creature["genotypes"]>((genotypes, key) => {
        genotypes[key] = this._genetics.createGenotype({
          parentOnePair: this._genotypes[key].pair,
          parentTwoPair: otherCreature.genotypes[key].pair,
        });

        return genotypes;
      }, {}),
    });
  }
}
