/**
 * STEP 1
 * 
 * Interfaces Products:
 * - ICPU
 * - IMemory
 * - IDisplay
 */

interface ICPU {
  setSeries(series: string): void;
}

interface IMemory {
  setCapacityInGB(capacity: number): void;
}

interface IDisplay {
  setResolution(): void;
}

/**
 * STEP 2
 * 
 * Concrete Products classes:
 * - CPU
 * - Memory
 * - Display
 */

class CPU implements ICPU {
  setSeries(series: string): void {
    console.log("[CPU] - setSeries " + series);
  }
};

class Memory implements IMemory {
  setCapacityInGB(capacity: number): void {
    console.log("[Memory] - setCapacityInGB " + capacity);
  }
};

class Display implements IDisplay {
  setResolution(): void {
    console.log("[Display] - setResolution");
  }
};

/**
 * STEP 3
 * 
 * Abstract Factory to create concrete products:
 */

interface IAbstractFactoryDevice {
  createCPU(): ICPU;
  createMemory(): IMemory;
  createDisplay(): IDisplay;
}

/**
 * STEP 4
 * 
 * Concrete Factories to create concrete products:
 * - PhoneFactory
 * - LaptopFactory
 * - TabletFactory
 */

class PhoneDeviceFactory implements IAbstractFactoryDevice {
  createCPU(): ICPU {
    return new CPU();
  }

  createMemory(): IMemory {
    return new Memory();
  }

  createDisplay(): IDisplay {
    return new Display();
  }
};

class LaptopDeviceFactory implements IAbstractFactoryDevice {
  createCPU(): ICPU {
    return new CPU();
  }

  createMemory(): IMemory {
    return new Memory();
  }

  createDisplay(): IDisplay {
    return new Display();
  }
};

class TabletDeviceFactory implements IAbstractFactoryDevice {
  createCPU(): ICPU {
    return new CPU();
  }

  createMemory(): IMemory {
    return new Memory();
  }

  createDisplay(): IDisplay {
    return new Display();
  }
};

/**
 * Main Function
 */

function appDeviceFactory(factory: IAbstractFactoryDevice) {
  const cpu: ICPU = factory.createCPU();
  const memory: IMemory = factory.createMemory();
  const display: IDisplay = factory.createDisplay();

  cpu.setSeries("serie-1");
  memory.setCapacityInGB(2);
  display.setResolution();
}

appDeviceFactory(new PhoneDeviceFactory());

export {}