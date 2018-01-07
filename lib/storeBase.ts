import Entry from './entry';

export default abstract class StoreBase {
  abstract log(entry: Entry): void;
}
