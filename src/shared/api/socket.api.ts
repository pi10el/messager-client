import io, { Socket } from 'socket.io-client';

type SocketEmitEvents = 'profile:get' | 'profile:update';
type SocketOnEvents = 'profile:client' | 'alerts';

class SocketClient {
  static socket: Socket | null;

  static connect(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.socket = io('http://localhost:3000', { auth: { token } });

      this.socket.on('connect', () => resolve(true));
      this.socket.on('connect_error', () => reject(false));
    });
  }

  static on<T>(event: SocketOnEvents, callback: (msg: T) => void) {
    this.socket?.on(event, callback);
  }

  static emit(event: SocketEmitEvents, data?: any) {
    this.socket?.emit(event, data);
  }
}

export default SocketClient;
