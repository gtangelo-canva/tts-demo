
import * as mobx from 'mobx';

export class TTSStore {
  @mobx.observable.ref
  text: string = "";
}