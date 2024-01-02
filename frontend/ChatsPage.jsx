import { MultiChatSocket , MultiChatWindow , useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('913add38-0986-45bb-9fdc-b43a66b08993',props.user.username,props.user.secret);
    return (
        <div style={{height : '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>        

    </div>
    )
}

export default ChatsPage