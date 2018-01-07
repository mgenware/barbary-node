import StoreBase from '../storeBase';
import Entry from '../entry';

export default class EmptyProvider extends StoreBase {
  constructor() {
    super();
  }

  log(_: Entry): void { }
}
