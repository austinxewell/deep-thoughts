import "./messenger.css"
import Conversation from "../conversations/Conversation"
import Message from "../message/Message"
import ChatOnline from "../chatOnline/ChatOnline"


export default function Messenger() {
    return(

        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" placeholder="Search for friends" className="chatMenuInput"/>
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message/>
                        <Message own={true} />
                        <Message />
                        <Message own={true} />
                        <Message/>
                        <Message own={true} />
                        <Message />
                        <Message own={true} />
                        <Message/>
                        <Message own={true} />
                        <Message />
                        <Message own={true} />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="Write Something..."></textarea>
                        <button className="chatSubmitButton">Send</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline />
                </div>
            </div>
        </div>
    )
}