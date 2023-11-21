import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SubmitHandler, useForm } from 'react-hook-form';
// state
import useAppDispatch from '../../../shared/hooks/useAppDispatch';

// api
import { useLoginMutation } from '../api/auth.api';

// styles
import styles from './styles.module.scss';

// components
import { Input } from '../../../feature/Input';
import { LockIcon } from '../../../shared/components/icons/LockIcon';
import { UserIcon } from '../../../shared/components/icons/UserIcon';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

interface IShippingFields {
  username: string;
  password: string;
}

const Form = React.forwardRef<HTMLFormElement>((_, ref) => {
  const { setSelectForm } = useAppDispatch();
  const [update, result] = useLoginMutation();
  const [__, setCookie] = useCookies();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid, errors },
  } = useForm<IShippingFields>({
    mode: 'all',
  });

  useEffect(() => {
    if (!result.data) return;
    setCookie('token', result.data.token);
    navigate('/');
  }, [result]);

  const onSubmit: SubmitHandler<IShippingFields> = async (data) => {
    update(data);
    reset();
  };

  return (
    <form ref={ref} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>Вход</h1>
      <Input
        uniqueName="authFormLogin"
        icon={<UserIcon />}
        type="text"
        placeholder="Логин"
        error={errors.username?.message}
        {...register('username', {
          onChange: (e) =>
            setValue('username', e.target.value.replace(/[^A-Яa-z\d]/g, '')),
          required: 'обязательное поле',
          validate: (val: string) => {
            const minLength = 4;

            if (val.length < minLength)
              return `мин. ${minLength} символа, ввели: ${val.length}`;
          },
        })}
      />
      <Input
        uniqueName="authFormLoginPassword"
        icon={<LockIcon />}
        type="password"
        placeholder="Пароль"
        error={errors.password?.message}
        {...register('password', {
          onChange: (e) =>
            setValue('password', e.target.value.replace(/[А-Яа-яЁё\s]/g, '')),
          required: 'обязательное поле',
          validate: (val: string) => {
            const minLength = 8;

            if (val.length < minLength) {
              return `мин. ${minLength} символов, ввели: ${val.length}`;
            }
          },
        })}
      />
      <button type="submit" className={styles.submit} disabled={!isValid}>
        Войти
      </button>
      <div className={styles.ps}>
        <p>Еще нет аккаунта?</p>
        <button type="button" onClick={() => setSelectForm('signin')}>
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
});

export const LoginForm = motion(Form);
