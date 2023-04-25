import React from 'react'

const UserMessage = ({url}) => {
  return (
    <div id="audioBodyDiv" className="mt-5 ml-60 chat chat-start">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div className="chat-header">
      You
      <time className="text-xs opacity-50 ml-1">12:45</time>
    </div>
    <div id="chatBodyDiv" className="chat-bubble"><audio src={url} controls /></div>
    <div className="chat-footer opacity-50">Delivered</div>
  </div>
  )
}

export default UserMessage