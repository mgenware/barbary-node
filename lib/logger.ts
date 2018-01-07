import LogLevel from './logLevel';
import FilterBase from './filterBase';
import StoreBase from './storeBase';
import Entry from './entry';

export default class Logger {
  private storeBase: StoreBase;

  constructor(store: StoreBase, public filter: FilterBase|null) {
    if (!store) {
      throw new Error('The provider argument cannot be null');
    }
    this.storeBase = store;
  }

  log(category: string, level: number, data: any) {
    const entry = new Entry(category, level, data);
    this.storeBase.log(entry);
  }

  logError(category: string, data: any) {
    this.log(category, LogLevel.Error, data);
  }

  logWarning(category: string, data: any) {
    this.log(category, LogLevel.Warning, data);
  }

  logInfo(category: string, data: any) {
    this.log(category, LogLevel.Info, data);
  }

  logVerbose(category: string, data: any) {
    this.log(category, LogLevel.Verbose, data);
  }
}
