class Rocket {
  constructor({ model, engine, category, nozzle }) {
    // Your code goes here...
    this._model = model;
    this._engine = engine;
    this._category = category;
    this._nozzle = nozzle;
    this._isRocketFactory = true;
  }

  get model() {
    // Your code goes here...
    return this._model;
  }

  get engine() {
    // Your code goes here...
    return this._engine;
  }

  get category() {
    // Your code goes here...
    return this._engine;
  }

  get nozzle() {
    // Your code goes here...
    return this._nozzle;
  }
}

class LiquidFuelRocket extends Rocket {
  // Your code goes here...
  constructor() {
    super({
      model: 'LF001',
      engine:  "liquid",
      category: "hermes",
      nozzle: "double"
    })
    return {
      model: this.model,
      engine: this.engine,
      category: this.category,
      nozzle: this.nozzle,
      isRocket: LiquidFuelRocket instanceof Rocket ? "hola" : "ERROR: liquidRocket is not instance of Rocket",
      isRocketFactory: this._isRocketFactory
    };
  }
}

class SolidFuelRocket extends Rocket {
  // Your code goes here...
  constructor() {
    super({
      model: 'SF001',
      engine:  "solid",
      category: "valkyria",
      nozzle: "single"
    })
    return {
      model: this.model,
      engine: this.engine,
      category: this.category,
      nozzle: this.nozzle,
      isRocket: LiquidFuelRocket instanceof Rocket ? "hola" : "ERROR: solidRocket is not instance of Rocket",
      isRocketFactory: this._isRocketFactory
    };
  }
}

class RocketFactory {
  // Your code goes here...
  createRocket() {
    return new Error('Not available at this moment!');
  }
}

class LiquidFuelRocketsFactory extends RocketFactory {
  // Your code goes here...
  createRocket() {
    return new LiquidFuelRocket();
  } 
}

class SolidFuelRocketsFactory extends RocketFactory {
  // Your code goes here...
  createRocket() {
    return new SolidFuelRocket();
  } 
}

function appFactory(factory) {
  if (!factory) {
    console.log("Factory wasn't provided, try again");
    return;
  }
  const adapter = factory.createRocket();
  return adapter;
}

const liquidFuelRocketFactory = appFactory(new LiquidFuelRocketsFactory);
console.log(liquidFuelRocketFactory);

const solidFuelRocketFactory = appFactory(new SolidFuelRocketsFactory);
console.log(solidFuelRocketFactory);
