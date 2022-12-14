import * as mobx from 'mobx';
import { TTSStore } from './tts_store';

export class TTSPresenter {
    @mobx.action
    readonly setText = (store: TTSStore, text: string) => {
        store.text = text;
    }
}
