import { useCookies } from 'react-cookie';
import { LogoutIcon } from '../../../shared/components/icons/LogoutIcon';
import useAppDispatch from '../../../shared/hooks/useAppDispatch';

interface Props {
  className: string;
}

export function ExitButton({ className }: Props) {
  const { reset } = useAppDispatch();
  const [_, __, removeCookie] = useCookies();

  const onClick = () => {
    reset();
    removeCookie('token');
  };

  return (
    <button type="button" className={className} onClick={onClick}>
      <LogoutIcon />
      <span>Выход</span>
    </button>
  );
}
