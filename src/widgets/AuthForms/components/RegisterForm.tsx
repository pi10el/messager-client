import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

// state
import useAppDispatch from '../../../shared/hooks/useAppDispatch';

// styles
import styles from './styles.module.scss';

// components
import { Input } from '../../../feature/Input';
import { LockIcon } from '../../../shared/components/icons/LockIcon';
import { UserIcon } from '../../../shared/components/icons/UserIcon';
import { MailIcon } from '../../../shared/components/icons/MainIcon';
import { UnlockIcon } from '../../../shared/components/icons/UnlockIcon';

interface IShippingFields {
  email: string;
  username: string;
  password: string;
  cpassword: string;
}

const Form = forwardRef<HTMLFormElement>((_, ref) => {
  const { setSelectForm } = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    trigger,
    formState: { isValid, errors },
  } = useForm<IShippingFields>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<IShippingFields> = async ({
    cpassword,
    ...data
  }) => {
    console.log(data);

    reset();
  };

  return (
    <form ref={ref} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>Регистрация</h1>
      <Input
        uniqueName="authFormRegisterEmail"
        icon={<MailIcon />}
        type="email"
        placeholder="Email"
        error={errors.email?.message}
        {...register('email', {
          onChange: (e) =>
            setValue('email', e.target.value.replace(/[^A-Яa-z@\.\d]/g, '')),
          required: 'обязательное поле',
          validate: (val: string) => {
            const minLength = 4;

            if (val.length < minLength)
              return `мин. ${minLength} символа, ввели: ${val.length}`;
          },
        })}
      />
      <Input
        uniqueName="authFormRegisterLogin"
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
        uniqueName="authFormRegisterPassword"
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
              trigger('cpassword');
              return `мин. ${minLength} символов, ввели: ${val.length}`;
            }
          },
        })}
      />
      <Input
        uniqueName="authFormRegisterRepeatPassword"
        icon={<UnlockIcon />}
        type="password"
        placeholder="Повторить пароль"
        error={errors.cpassword?.message}
        {...register('cpassword', {
          onChange: (e) =>
            setValue('cpassword', e.target.value.replace(/[А-Яа-яЁё\s]/g, '')),
          required: 'обязательное поле',
          validate: (val: string) => {
            if (val.length < 8)
              return `мин. ${8} символов, ввели: ${val.length}`;

            if (getValues('password') !== val) return 'пароли не совпадают';
          },
        })}
      />
      <button type="submit" className={styles.submit} disabled={!isValid}>
        Зарегистрироваться
      </button>
      <div className={styles.ps}>
        <p>Уже есть аккаунт?</p>
        <button type="button" onClick={() => setSelectForm('login')}>
          Войти
        </button>
      </div>
    </form>
  );
});

export const RegisterForm = motion(Form);
