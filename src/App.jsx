import { useState } from 'react'
import './App.css'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

function App() {

    const recorderControls = useAudioRecorder()
    
    const addAudioElement = (blob) => {
      const url = URL.createObjectURL(blob);
      const audio = document.createElement("audio");
      audio.src = url;
      audio.controls = true;
      const audioBody = document.getElementById("audioBodyDiv");
      console.log("AUDIO", audio)
      audioBody.appendChild(audio)
    };

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen'>
    <div>
      <div className="ml-60 chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          You
          <time className="text-xs opacity-50 ml-1">12:45</time>
        </div>
        <div id="audioBodyDiv" className="chat-bubble"></div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
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
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>

    <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
    </div>
  )
}

export default App
