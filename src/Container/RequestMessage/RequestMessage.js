import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import axios from 'axios'
import Message from '../../Component/Message/Message'
import Modal from '../../Component/UI/Modal/Modal'
import RequestSummarys from '../../Component/RequestControls/RequestSummarys'


class RequestMessage extends Component {
    state = {
        posts: [],
        requesting: false
    }
    
    requestCancelHandler = () => {
        this.setState({requesting: false})
    }
    requestHandler = () => {
        this.setState({requesting: true});
    }
    componentDidMount () {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts:response.data});
                //console.log(response);
            });
    }
    render() {
        const posts = this.state.posts.map(post => {
            
            return <RequestSummarys 
            title={post.title}
            key={post.id}/>
        })
        const slicepost = posts.slice(0,4);
        return (
            <Aux>
            <Modal show={this.state.requesting} modalClosed={this.requestCancelHandler}>
                {slicepost}
            </Modal>
                <Message request={this.requestHandler}/>
            </Aux>
        )
    }
}
export default RequestMessage