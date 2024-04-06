import { Allele } from "./Allele";
import { Genetics } from "./Genetics";

export type GeneProps = {
  trait: string;
  genetics: Genetics;
  alleles: [Allele, Allele];
};

export class Gene {
  private _trait: GeneProps["trait"];
  private _alleles: GeneProps["alleles"];
  private _genetics: GeneProps["genetics"];

  constructor({ trait, alleles, genetics }: GeneProps) {
    if (alleles.some((allele) => allele.trait !== trait)) {
      throw new Error("allele trait must match the gene trait");
    }

    this._trait = trait;
    this._alleles = alleles;
    this._genetics = genetics;
  }

  get genetics() {
    return this._genetics;
  }

  get random() {
    return this._genetics.random;
  }

  get type() {
    const [alleleOne, alleleTwo] = this._alleles;
    return alleleOne === alleleTwo ? "homozygous" : "heterozygous";
  }

  get trait() {
    return this._trait;
  }

  get alleles(): GeneProps["alleles"] {
    return [...this._alleles];
  }

  get phenotype() {
    const [alleleOne, alleleTwo] = this._alleles;
    return alleleOne.dominance > alleleTwo.dominance ? alleleOne : alleleTwo;
  }
}
