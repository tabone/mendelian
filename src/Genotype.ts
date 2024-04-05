import { Gene } from "./Gene";
import { Genetics } from "./Genetics";

type GenePair = [Gene, Gene];

export type GenotypeProps = {
  genetics: Genetics;
  parentOnePair: GenePair;
  parentTwoPair: GenePair;
};

export class Genotype {
  private _pair: GenePair;
  private _genetics: GenotypeProps["genetics"];
  private _parentOnePair: GenotypeProps["parentOnePair"];
  private _parentTwoPair: GenotypeProps["parentTwoPair"];

  constructor({
    genetics,
    parentOnePair: parentOnePair,
    parentTwoPair: parentTwoPair,
  }: GenotypeProps) {
    if (
      [...parentOnePair, ...parentTwoPair].some(
        (gene) => gene.feature !== parentOnePair[0].feature,
      )
    ) {
      throw new Error("genes within a genotype must have the same feature");
    }

    this._genetics = genetics;
    this._parentOnePair = parentOnePair;
    this._parentTwoPair = parentTwoPair;

    this._pair = [
      this._parentOnePair[this.random(this._parentOnePair.length)],
      this._parentTwoPair[this.random(this._parentTwoPair.length)],
    ];
  }

  get genetics() {
    return this._genetics;
  }

  get random() {
    return this._genetics.random;
  }

  get feature() {
    return this._parentOnePair[0].feature;
  }

  get parentOnePair(): GenePair {
    return [...this._parentOnePair];
  }

  get parentTwoPair(): GenePair {
    return [...this._parentTwoPair];
  }

  get pair(): GenePair {
    return [...this._pair];
  }

  get phenotype() {
    const [geneOne, geneTwo] = this._pair;
    return geneOne.dominance > geneTwo.dominance ? geneOne : geneTwo;
  }
}
