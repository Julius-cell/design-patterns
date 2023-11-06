type AvailableColors = 'red' | 'black' | 'gray' | 'blue' | 'default';
type EditionsType = 'cvt' | 'signature' | 'sport' | 'default';
type CarCatalog = 'mastodon' | 'rhino';
type ConstructorParams = { modelToCustomizeInLine: CarCatalog };

interface IBuilderCarProductLine {
  setAirBags(howMany: number): IBuilderCarProductLine;
  setColor(color: AvailableColors): IBuilderCarProductLine;
  setEdition(edition: EditionsType): IBuilderCarProductLine;
  resetProductionLine(): void;
}

class SedanProductionLine implements IBuilderCarProductLine {
  private sedanCar!: BaseCar;
  private modelToCustomizeInLine!: CarCatalog;

  constructor({ modelToCustomizeInLine }: ConstructorParams) {
    console.log('hola from SedanProductionLine');
    
    this.setModelToBuild(modelToCustomizeInLine);
    this.resetProductionLine();
  }

  setAirBags(howMany: number): SedanProductionLine {
    this.sedanCar.airBags = howMany;
    return this;
  }

  setModelToBuild(model: CarCatalog) {
    this.modelToCustomizeInLine = model;
  }

  setColor(color: AvailableColors): SedanProductionLine {
    this.sedanCar.color = color;
    return this;
  }

  setEdition(edition: EditionsType): SedanProductionLine {
    this.sedanCar.edition = edition;
    return this;
  }

  resetProductionLine() {
    this.sedanCar =
      this.modelToCustomizeInLine === 'mastodon'
        ? new MastodonSedanCar()
        : new RhinoSedanCar();
  }

  build(): BaseCar {
    const sedanCar = this.sedanCar;
    this.resetProductionLine();
    return sedanCar;
  }
}

class HatchBackProductionLine implements IBuilderCarProductLine {
  private hatchBack!: BaseCar;
  private modelToCustomizeInLine!: CarCatalog;

  constructor({ modelToCustomizeInLine }: ConstructorParams) {
    console.log('hola from HatchBackProductionLine');
    
    this.setModelToBuild(modelToCustomizeInLine);
    this.resetProductionLine();
  }

  setModelToBuild(model: CarCatalog) {
    this.modelToCustomizeInLine = model;
  }

  setAirBags(howMany: number): HatchBackProductionLine {
    this.hatchBack.airBags = howMany;
    return this;
  }

  setColor(color: AvailableColors): HatchBackProductionLine {
    this.hatchBack.color = color;
    return this;
  }

  setEdition(edition: EditionsType): HatchBackProductionLine {
    this.hatchBack.edition = edition;
    return this;
  }

  resetProductionLine() {
    this.hatchBack =
      this.modelToCustomizeInLine !== 'mastodon'
        ? new MastodonHatchBackCar()
        : new RhinoHatchBackCar();
  }

  build(): BaseCar {
    const hatchBack = this.hatchBack;
    this.resetProductionLine();
    return hatchBack;
  }
}

class BaseCar {
  private _edition!: EditionsType;
  private _model!: string;
  private _airBags: number = 2;
  private _color: AvailableColors = 'black';

  /**
   * Base car airBags attribute setter
   * @param howMany airbags number
   */
  set airBags(howMany: number) {
    this._airBags = howMany;
  }

  /**
   * Base car color attribute setter
   * @param color car color from a specific list
   */
  set color(color: AvailableColors) {
    this._color = color;
  }

  /**
   * Base car edition attribute setter
   * @param {string} edition car edition
   */
  set edition(edition: EditionsType) {
    this._edition = edition;
  }

  /**
   * Base car model attribute setter
   * @param {string} model car model (sedan/hatchbak)
   */
  set model(model: string) {
    this._model = model;
  }
}

class MastodonSedanCar extends BaseCar {
  constructor() {
    // super se utiliza cuando queremos que el constructor 
    // herede las propiedades d ela clase padre inicializándolas previamente
    super();
    this.model = 'sedan';
  }
}

class RhinoSedanCar extends BaseCar {
  constructor() {
    super();
    this.model = 'sedan';
  }
}

class MastodonHatchBackCar extends BaseCar {
  constructor() {
    super();
    this.model = 'hatchback';
  }
}

class RhinoHatchBackCar extends BaseCar {
  constructor() {
    super();
    this.model = 'hatchback';
  }
}

class Director {
  private productionLine!: IBuilderCarProductLine;

  setProductionLine(productionLine: IBuilderCarProductLine) {
    this.productionLine = productionLine;
  }

  constructCvtEdition(): void {
    this.productionLine
      .setAirBags(4)
      .setColor('blue')
      .setEdition('cvt');
  }

  constructSignatureEdition(): void {
    this.productionLine
      .setAirBags(8)
      .setColor('gray')
      .setEdition('signature');
  }

  construcSportEdition(): void {
    this.productionLine
     .setAirBags(2)
     .setColor('red')
     .setEdition('sport');
  }
}

function appBuilder(director: Director) {
  console.log('--- [TS] Calling appBuilder ---\n');
  if (!director) {
    console.log('--- No director provided ---');
    return;
  }

  const mastodonSedanProductionLine = new SedanProductionLine({ modelToCustomizeInLine: 'mastodon' });

  director.setProductionLine(mastodonSedanProductionLine);
  director.constructCvtEdition();
  const mastodonSedanCvt = mastodonSedanProductionLine.build();
  console.log('\n--- Mastodon Sedan CVT ---\n');
  console.log(mastodonSedanCvt);
  
  const rhinoHatchBackProductionLine = new HatchBackProductionLine({ modelToCustomizeInLine: 'rhino' });
  director.setProductionLine(rhinoHatchBackProductionLine);
  director.constructCvtEdition();
  const rhinoHatchBackCvt = rhinoHatchBackProductionLine.build();
  console.log('\n--- Sedan HatchBack CVT ---\n');
  console.log(rhinoHatchBackCvt);
  
}

appBuilder(new Director());

export { }