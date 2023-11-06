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
// ABSTRACT-FACTORY METHOD 
// --------------------------------------------------------------

// STEP 1

interface IModeloA {
  runEngine(): string;
}

interface IModeloB {
  runEngine(): string;
}

// STEP 2
class ModeloASilver implements IModeloA {
  runEngine(): string {
    return '[MODELO A - SILVER] Engine running...';
  }
}

class ModeloAGold implements IModeloA {
  runEngine(): string {
    return '[MODELO A - GOLD] Engine running...';
  }
}

class ModeloBSilver implements IModeloB {
  runEngine(): string {
    return '[MODELO B - SILVER] Engine running...';
  }
}

class ModeloBGold implements IModeloB {
  runEngine(): string {
    return '[MODELO B - GOLD] Engine running...';
  }
}