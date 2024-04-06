<div align="center">
  <h1>mendelian</h1>

  <br />

  <img width="500" alt="Logo" src="https://i.imgur.com/Ul6YE78.png">

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
const blueEye = genetics.createAllele({
  trait: "eye-color",
  dominance: 3,
  description: "blue",
});

const greenEye = genetics.createAllele({
  trait: "eye-color",
  dominance: 5,
  description: "green",
});

const brownEye = genetics.createAllele({
  trait: "eye-color",
  dominance: 8,
  description: "brown",
});
```

### Creating `Creature`s with `Gene`s

```javascript
const creatureOne = genetics.createCreature({
  genes: {
    eye: genetics.createGene({
      trait: "eye-color",
      alleles: [brownEye, blueEye],
    }),
  },
});

const creatureTwo = genetics.createCreature({
  genes: {
    eye: genetics.createGene({
      trait: "eye-color",
      alleles: [brownEye, blueEye],
    }),
  },
});
```

### Reproducing a child

```javascript
console.log(creatureOne.mate(creatureTwo).genes.eye.phenotype.description); // => brown
```

<div align="center">
  <img width="500" alt="Demo" src="https://i.imgur.com/lJ68rlz.png">
</div>
