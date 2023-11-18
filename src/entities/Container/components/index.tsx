// styles
import styles from './styles.module.scss';

interface Props {
  tag: 'section';
  variant: 'navbar';
  children: React.ReactNode;
}

export function Conatainer({ tag, variant, children }: Props) {
  const Component = tag;

  return <Component className={styles[variant]}>{children}</Component>;
}
