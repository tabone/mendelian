<div align="center">
  <h1>mendelian</h1>

  <br />

  <img width="500" alt="Screenshot 2020-05-26 at 21 03 33" src="https://github.com/tabone/illudir/assets/5364897/09f3596c-cbe0-492c-b355-713f826a4563">

  <hr />
</div>

This package provides functionality for simulating genetic inheritance in creatures using [Mendelian inheritance](https://en.wikipedia.org/wiki/Mendelian_inheritance) principles. It facilitates the creation of genes, genotypes, and creatures with customizable genetic properties.

## Installation

You can install the package via npm:

```bash
npm install genetics
```

## Usage

### Creating a new seeded `Genetics` instance

```javascript
const genetics = new Genetics({ seed: "idrinkandiknowthings" });
```

### Creating `Gene`s

```javascript
const blueEyes = genetics.createGene({
  feature: "eye",
  dominance: 3,
  description: "blue",
});

const greenEyes = genetics.createGene({
  feature: "eye",
  dominance: 5,
  description: "green",
});

const brownEyes = genetics.createGene({
  feature: "eye",
  dominance: 8,
  description: "brown",
});
```

### Creating `Creature`s with `Genotype`s

```javascript
const creatureOne = genetics.createCreature({
  genotypes: {
    eyes: genetics.createGenotype({
      parentOnePair: [brownEyes, blueEyes],
      parentTwoPair: [brownEyes, greenEyes],
    }),
  },
});

const creatureTwo = genetics.createCreature({
  genotypes: {
    eyes: genetics.createGenotype({
      parentOnePair: [blueEyes, blueEyes],
      parentTwoPair: [brownEyes, greenEyes],
    }),
  },
});
```

### Reproducing a child

```javascript
const child = creatureOne.mate(creatureTwo);

console.log(child.genotypes.eyes.phenotype.description);
```

<div align="center">
  <img width="500" alt="Demo" src="https://github.com/tabone/mendelian/assets/5364897/ab245360-1d58-455e-bfed-e8e7e56aa2c9">
</div>
