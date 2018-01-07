import LogLevel from './logLevel';
import FilterBase from './filterBase';
import ProviderBase from './providerBase';
import Entry from './entry';

export default class Logger {
  private providerBase: ProviderBase;

  constructor(provider: ProviderBase, public filter: FilterBase|null) {
    if (!provider) {
      throw new Error('The provider argument cannot be null');
    }
    this.providerBase = provider;
  }

  log(category: string, level: number, data: any) {
    const entry = new Entry(category, level, data);
    this.providerBase.log(entry);
  }

  error(category: string, data: any) {
    this.log(category, LogLevel.Error, data);
  }

  warning(category: string, data: any) {
    this.log(category, LogLevel.Warning, data);
  }

  info(category: string, data: any) {
    this.log(category, LogLevel.Info, data);
  }

  verbose(category: string, data: any) {
    this.log(category, LogLevel.Verbose, data);
  }
}
