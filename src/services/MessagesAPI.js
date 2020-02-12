import axios from "../utils/httpClient";

class MessagesAPI {

  static allRecentMessages(userid, THIS) {

    let chatPromise = new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:5000/chats/allchats/${userid}`)
        .then(response => {
          resolve(response)
        })
    });
    chatPromise
      .then(response => {
        THIS.setState({ chatData: response["data"] })
      })
  };

  static chatroom(THIS) {

    let chatPromise = new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:5000/chats/${THIS.state.ownId}/chatroom/${THIS.state.msgId}`)
        .then(response => resolve(response))
    });

    chatPromise
      .then(response => {
        if (JSON.stringify(THIS.state.chatters) != JSON.stringify(response.data.chatters)) {
          THIS.setState({
            chatters: response.data.chatters,
            messages: response.data.messages
          })
        }
      })
  };

  static chatroomMessage(ownId, chatroomId, msg, THIS) {
    axios
      .post(
        "http://localhost:5000/chats/sentmsg",
        { ownId, chatroomId, msg }
      )
      .then(response => THIS.setState({ msgInput: null }))
      .catch(error => console.log(error))

  }
};

export default MessagesAPI;
