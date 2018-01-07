import ProviderBase from '../providerBase';
import Entry from '../entry';

export default class EmptyProvider extends ProviderBase {
  constructor() {
    super();
  }

  log(_: Entry): void { }
}
