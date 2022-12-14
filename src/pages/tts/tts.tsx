import React from 'react'
import { TTSMessages } from './tts.messages'

type Props = {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

// export const TTS = ({ value, onChange }: Props) => {

//   console.log('===value', value)
//   const convertTTS = () => {
//     console.log('convert TTS');
//   }

//   return (
//     <div>
//       <input type="text" placeholder={TTSMessages.inputPlaceholder()} onChange={onChange} value={value} />
//       <input type="submit" onClick={convertTTS} value={TTSMessages.submitBtnText()} />
//     </div>
//   )
// }


export class TTS extends React.Component<Props> {
  override render() {
    const { value, onChange } = this.props;

      return (
        <div>
        <input type="text" placeholder={TTSMessages.inputPlaceholder()} onChange={onChange} value={value} />
        <input type="submit" onClick={() => {
    console.log('convert TTS');
  }} value={TTSMessages.submitBtnText()} />
      </div>
      );
  }
}


