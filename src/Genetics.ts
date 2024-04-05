import { create as createRandomSeed, RandomSeed } from "random-seed";
import { Gene, GeneProps } from "./Gene";
import { Genotype, GenotypeProps } from "./Genotype";
import { Creature, CreatureProps } from "./Creature";

type GeneticsProps = {
  seed: string;
};

export class Genetics {
  private _seed: string;
  private _random: RandomSeed;

  constructor({ seed }: GeneticsProps) {
    this._seed = seed;
    this._random = createRandomSeed(seed);
  }

  get seed() {
    return this._seed;
  }

  get random() {
    return this._random;
  }

  createGene(props: Omit<GeneProps, "genetics">) {
    return new Gene({ ...props, genetics: this });
  }

  createGenotype(props: Omit<GenotypeProps, "genetics">) {
    return new Genotype({ ...props, genetics: this });
  }

  createCreature(props: Omit<CreatureProps, "genetics">) {
    return new Creature({ ...props, genetics: this });
  }
}
