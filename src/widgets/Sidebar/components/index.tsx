import { useEffect, useState } from 'react';
import SocketClient from '../../../shared/api/socket.api';

// styles
import styles from './styles.module.scss';

// components
import { Wrapper } from './Wrapper';
import { MoreIcon } from '../../../shared/components/icons/MoreIcon';
import { PaletteColorIcon } from '../../../shared/components/icons/PaletteColorIcon';
import { SwitchTheme } from '../../../feature/SwitchTheme';
import { EmptyPhoto } from '../../../entities/EmptyPhoto';
import { ExitButton } from './ExitButton';
import { ProfileField } from './ProfileField';

export function Sidebar() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    SocketClient.on<UserProfile>('profile:client', (msg) => setProfile(msg));
    SocketClient.emit('profile:get');
  }, []);

  return (
    <Wrapper>
      <div className={styles.header}>
        <div className={styles.image}>
          {profile?.avatar ? (
            <img src={profile.avatar.src} alt="profile logo" />
          ) : (
            <EmptyPhoto />
          )}
          <h1>{profile?.username}</h1>
        </div>
        <button type="button">
          <MoreIcon />
        </button>
      </div>
      <div className={styles.part}>
        <span>Аккаунт</span>
        <ProfileField
          field="username"
          value={profile?.username || ''}
          label="Ник пользователя"
        />
        <ProfileField
          field="about"
          value={profile?.about || ''}
          label="Обо мне"
        />
      </div>
      <div className={styles.part}>
        <span>Настройки</span>
        <div className={styles.theme}>
          <div className={styles.settingsBtn}>
            <PaletteColorIcon />
            <span>Выбор темы</span>
          </div>
          <SwitchTheme />
        </div>
        <ExitButton className={styles.settingsBtn} />
      </div>
    </Wrapper>
  );
}
