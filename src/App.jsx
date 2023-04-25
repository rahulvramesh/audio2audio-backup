import { useState } from 'react'
import './App.css'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import UserMessage from './UserMessage';

function App() {

    const recorderControls = useAudioRecorder();
    const [audioList, setAudioList] = useState([]);
    
    const addAudioElement = (blob) => {
      const url = URL.createObjectURL(blob);
      setAudioList([...audioList, url]);
      console.log("AUDIO LIST", audioList)
    };

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen h-full'>
    <div className='pt-20'>
    <div className="mr-60 chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          OpenAI
          <time className="text-xs opacity-50 ml-1">12:46</time>
        </div>
        <div className="chat-bubble">Hello! How can I help you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      {audioList.map((audioUrl) => (
        <UserMessage url={audioUrl} />
      ))}

    </div>

      <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
   
      {/* <button onClick={recorderControls.stopRecording}>Stop recording</button> */}
    </div>
  )
}

export default App
