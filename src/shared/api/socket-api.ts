import io, { Socket } from 'socket.io-client';

class SocketApi {
  static chat: null | Socket;
  static alert: null | Socket;

  static createConectionChat() {
    this.chat = io('http://localhost:3000/chat');

    this.chat.on('connect', () => {
      console.log('connected chat');
    });
    this.chat.on('disconnect', () => {
      console.log('disconnected chat');
    });
  }

  static createConectionAlert() {
    this.alert = io('http://localhost:3000/alert');

    this.alert.on('connect', () => {
      console.log('connected alerts');
    });
    this.alert.on('disconnect', () => {
      console.log('disconnected alerts');
    });
  }
}

export default SocketApi;
