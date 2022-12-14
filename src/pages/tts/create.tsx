import * as React from 'react';
import * as mobxReact from 'mobx-react';
import { TTSPresenter } from './tts_presenter';
import { TTSStore } from './tts_store';
import { TTS } from './tts';

export function createTTS(): React.ComponentType {
    const store = new TTSStore();
    const presenter = new TTSPresenter();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        presenter.setText(store, e.target.value)
    };

    const TTSContainer = mobxReact.observer(() => {
        console.log('text', store.text);
        return <TTS value={store.text} onChange={onChange} />;
    });

    return TTSContainer;
}

