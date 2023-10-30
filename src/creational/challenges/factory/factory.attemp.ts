interface IMyHttpAdapter {
  get(): void;
  post(): void;
  put(): void;
  delete(): void;
}


class MyHttpAdapter implements IMyHttpAdapter {
  get() {
    console.log('get');
  };

  post() {
    console.log('post');
  };

  put() {
    console.log('put');
  };

  delete() {
    console.log('delete');
  };
}

interface IHttpAdapterFactory {
  makeHttpAdapter(): IMyHttpAdapter;
}

class HttpAdapterFactory implements IHttpAdapterFactory {
  makeHttpAdapter(): IMyHttpAdapter {
    return new MyHttpAdapter();
  }
}

function appFactory(factory: IHttpAdapterFactory) {
  const httpAdapter: IMyHttpAdapter = factory.makeHttpAdapter();
  httpAdapter.get();
}

// appFactory(new HttpAdapterFactory());

type MyFactoryType = 'http';

function createFactory(type: MyFactoryType) {
  const factories = {
    http: HttpAdapterFactory,
  };
  const FactoryClass = factories[type];
  return new FactoryClass();
}

appFactory(createFactory('http'));