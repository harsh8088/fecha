import React, { Component } from 'react';
import ChatList from './chatList.js'
class Chat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home-container">
                <div className="card-container">
                    <div className="round-border-chat">
                        <p> Chatting with :</p>
                    </div>
                    <ChatList />
                    <div className="chat-input-container">
                        <input className="chat-round-border" type="text" placeholder="Reply" />
                    </div>
                    </div>

                </div>
                );
            }
        }
        
export default Chat;