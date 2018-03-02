import React from "react";
import io from "socket.io-client";

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };
        const port = process.env.PORT
        console.log(port)
        this.socket = io(`localhost:${port}`);

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }


    render(){
        return (
            <div  className="card" >
                <div className="row">
                    <div className="col-4">
                            <div style ={{position: 'relative', marginLeft: '72%', bottom: '750px', marginBottom: 0, backgroundColor: 'white', borderRadius: '7%'}} className="card">
                                <div style= {{textAlign: 'center', fontWeight: '200'}} className="header">Chat Box</div>
                                <hr/>
                                <div style= {{marginLeft: '5%'}} className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}

                                </div>
                                <div className="footer">
                                    <input style= {{position: 'relative', marginLeft: '5%', top: '70px'}} type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                    <br/>
                                    <input style= {{position: 'relative', marginLeft: '5%', top: '35px'}} type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                    <br/>
                                    <button style= {{marginLeft: '60%'}} onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
