import { Gene } from "./Gene";
import { Genetics } from "./Genetics";

export type CreatureProps = {
  genetics: Genetics;
  genes: Record<string, Gene>;
};

export class Creature {
  private _genes: CreatureProps["genes"];
  private _genetics: CreatureProps["genetics"];

  constructor({ genes, genetics }: CreatureProps) {
    this._genes = genes;
    this._genetics = genetics;
  }

  get genetics() {
    return this._genetics;
  }

  get random() {
    return this._genetics.random;
  }

  get genes() {
    return { ...this._genes };
  }

  mate(otherCreature: Creature) {
    return new Creature({
      genetics: this._genetics,

      genes: (Object.keys(this._genes) as (keyof typeof this._genes)[]).reduce<
        CreatureProps["genes"]
      >((genes, key) => {
        const { trait } = this._genes[key];

        const creatureGeneAlleles = this._genes[key].alleles;
        const otherCreatureGeneAlleles = otherCreature._genes[key].alleles;

        genes[key] = new Gene({
          trait,
          genetics: this._genetics,
          alleles: [
            creatureGeneAlleles[this.random(creatureGeneAlleles.length)],
            otherCreatureGeneAlleles[
              this.random(otherCreatureGeneAlleles.length)
            ],
          ],
        });

        return genes;
      }, {}),
    });
  }
}
