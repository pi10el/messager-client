import { useRef, useState } from 'react';

// styles
import styles from './styles.module.scss';

// components
import { SendIcon } from '../../../shared/components/icons/SendIcon';
// import SocketApi from '../../../shared/api/socket-api';

export function SendMessage() {
  const refInput = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState('');

  const resetInput = () => {
    refInput.current!.textContent = '';
    setValue('');
  };

  const onSubmit = async () => {
    if (!value) return;

    // SocketApi.chat?.emit('msgToServer', {
    //   username: 'pi10el',
    //   text: value,
    // });

    // SocketApi.chat?.on('msgToClient', (msg) => console.log('rev: ', msg));

    resetInput();
  };

  return (
    <div className={styles.send}>
      <div
        ref={refInput}
        contentEditable
        className={styles.input}
        data-placeholder={!value ? 'Написать сообщение...' : ''}
        onInput={(e) => {
          setValue(e.currentTarget.textContent || '');
        }}
        onKeyDown={(e) => {
          if (e.key === 'Delete') {
            resetInput();
          }

          if (e.key === 'Enter') {
            e.preventDefault();
            onSubmit();
          }
        }}
      />
      <button
        type="button"
        className={styles.submit}
        onClick={() => {
          onSubmit();
          refInput.current!.focus();
        }}
      >
        <SendIcon />
      </button>
    </div>
  );
}
