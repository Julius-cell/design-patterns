/**
 * We need to create all this types of products:
 * ModeloA:		 
 * - V1 
 *    - Silver
 *    - Gold
 * - V2
 *    - Silver
 *    - Gold
 * 
 * ModeloB		 
 * - V1 
 *    - Silver
 *    - Gold
 * - V2
 *    - Silver
 *    - Gold
 * 
 */

// --------------------------------------------------------------
// FACTORY METHOD - Not well used for this problem 
// --------------------------------------------------------------

// STEP 1
interface ICar {
  runEngine(): void;
  setColor(color: string): void;
  setAirBags(airBags: number): void;
}

// STEP 2
// MODEL A
class ModeloASilverV1 implements ICar {
  runEngine(): void {
    console.log('[MODELO A - SILVER - V1] Engine running...');
  }
  setColor(color: string): void {
    console.log('[MODELO A - SILVER - V1] Color set to: ' + color);
  }
  setAirBags(airBags: number): void {
    console.log(
      '[MODELO A - SILVER - V1] Air bags set to:' + airBags
    );
  }
}

class ModeloASilverV2 implements ICar {
  runEngine(): void {
    console.log('[MODELO A - SILVER - V2] Engine running...');
  }
  setColor(color: string): void {
    console.log('[MODELO A - SILVER - V2] Color set to: ' + color);
  }
  setAirBags(airBags: number): void {
    console.log(
      '[MODELO A - SILVER - V2] Air bags set to:' + airBags
    );
  }
}

class ModeloAGoldV1 implements ICar {
  runEngine(): void {
    console.log('[MODELO A - GOLD - V1] Engine running...');
  }
  setColor(color: string): void {
    console.log('[MODELO A - GOLD - V1] Color set to:' + color);
  }
  setAirBags(airBags: number): void {
    console.log('[MODELO A - GOLD - V1] Air bags set to:' + airBags);
  }
}

class ModeloAGoldV2 implements ICar {
  runEngine(): void {
    console.log('[MODELO A - GOLD - V2] Engine running...');
  }
  setColor(color: string): void {
    console.log('[MODELO A - GOLD - V2] Color set to:' + color);
  }
  setAirBags(airBags: number): void {
    console.log('[MODELO A - GOLD - V2] Air bags set to:' + airBags);
  }
}

// MODEL B
class ModeloBSilverV1 implements ICar {
  runEngine(): void {
    console.log('[MODELO B - SILVER - V1] Engine running...');
  }
  setColor(color: string): void {
    console.log('[MODELO B - SILVER - V1] Color set to: ' + color);
  }
  setAirBags(airBags: number): void {
    console.log(
      '[MODELO B - SILVER - V1] Air bags set to:' + airBags
    );
  }
}

class ModeloBSilverV2 implements ICar {
  runEngine(): void {
    console.log('[MODELO B - SILVER - V2] Engine running...');
  }
  setColor(color: string): void {
    console.log('[MODELO B - SILVER - V2] Color set to: ' + color);
  }
  setAirBags(airBags: number): void {
    console.log(
      '[MODELO B - SILVER - V2] Air bags set to:' + airBags
    );
  }
}

class ModeloBGoldV1 implements ICar {
  runEngine(): void {
    console.log('[MODELO B - GOLD - V1] Engine running...');
  }
  setColor(color: string): void {
    console.log('[MODELO B - GOLD - V1] Color set to:' + color);
  }
  setAirBags(airBags: number): void {
    console.log('[MODELO B - GOLD - V1] Air bags set to:' + airBags);
  }
}

class ModeloBGoldV2 implements ICar {
  runEngine(): void {
    console.log('[MODELO B - GOLD - V2] Engine running...');
  }
  setColor(color: string): void {
    console.log('[MODELO B - GOLD - V2] Color set to:' + color);
  }
  setAirBags(airBags: number): void {
    console.log('[MODELO B - GOLD - V2] Air bags set to:' + airBags);
  }
}


// STEP 3
interface ICarFactory {
  makeSilverV1Car(): ICar;
  makeSilverV2Car(): ICar;
  makeGoldV1Car(): ICar;
  makeGoldV2Car(): ICar;
}

// STEP 4
class ModeloAFactory implements ICarFactory {
  makeSilverV1Car(): ICar {
    return new ModeloASilverV1();
  }
  makeSilverV2Car(): ICar {
    return new ModeloASilverV2();
  }
  makeGoldV1Car(): ICar {
    return new ModeloAGoldV1();
  }
  makeGoldV2Car(): ICar {
    return new ModeloAGoldV2();
  }
}

class ModeloBFactory implements ICarFactory {
  makeSilverV1Car(): ICar {
    return new ModeloBSilverV1();
  }
  makeSilverV2Car(): ICar {
    return new ModeloBSilverV2();
  }
  makeGoldV1Car(): ICar {
    return new ModeloBGoldV1();
  }
  makeGoldV2Car(): ICar {
    return new ModeloBGoldV2();
  }
}

// MAIN FUNCTION
function appFactory(factory: ICarFactory) {
  console.log('--- [TS] Calling appFactory ---\n');
  if (!factory) {
    console.log('--- No factory provided ---');
    return;
  }
  const carGoldV1: ICar = factory.makeGoldV1Car();
  const carGoldV2: ICar = factory.makeGoldV2Car();
  const carSilverV1: ICar = factory.makeSilverV1Car();
  const carSilverV2: ICar = factory.makeSilverV2Car();
  carGoldV1.runEngine();
  carGoldV2.runEngine();
  carSilverV1.runEngine();
  carSilverV2.runEngine();
}

// appFactory(new ModeloAFactory());

type FactoryType = 'modeloA' | 'modeloB';

function createFactory(type: FactoryType) {
  const factories = {
    modeloA: ModeloAFactory,
    modeloB: ModeloBFactory
  };
  const FactoryClass = factories[type];
  return new FactoryClass();
}

appFactory(createFactory('modeloA'));


export {};