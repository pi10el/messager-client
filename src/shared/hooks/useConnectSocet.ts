import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import SocketClient from '../api/socket.api';

export const useConnectSocket = () => {
  const [cookie] = useCookies(['token']);
  const [status, setStatus] = useState(false);

  const connectSocket = async () => {
    const isConnect = await SocketClient.connect(cookie.token);
    setStatus(isConnect);
  };

  useEffect(() => {
    connectSocket();
  }, []);

  return status;
};
