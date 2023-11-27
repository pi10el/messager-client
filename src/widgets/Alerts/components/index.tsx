'use client';

import SocketClient from '../../../shared/api/socket.api';

//components
import { Item } from './Item';

//styles
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

interface IAlert {
  id: number;
  status: boolean;
  message: string;
}

export function Alerts() {
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  useEffect(() => {
    SocketClient.socket?.on('alerts', (msg: Omit<IAlert, 'id'>) => {
      setAlerts((prev) => [...prev, { id: Date.now(), ...msg }]);
    });
  }, []);

  if (!alerts) return null;

  return (
    <div className={styles.container}>
      {alerts.map((el) => (
        <Item
          key={el.id}
          {...el}
          callback={(id) =>
            setAlerts((prev) => prev.filter((el) => el.id !== id))
          }
        />
      ))}
    </div>
  );
}
