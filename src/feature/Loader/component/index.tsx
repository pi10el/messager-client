import styles from './styles.module.scss';

export function Loader() {
  return (
    <div className={styles.loader}>
      <svg viewBox="0 0 100 100">
        <circle className={styles.oneCircle} cx="50" cy="50" r="30" />
        <circle className={styles.twoCircle} cx="50" cy="50" r="30">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;180 50 50;720 50 50"
            keyTimes="0;0.5;1"
          ></animateTransform>
          <animate
            attributeName="stroke-dasharray"
            repeatCount="indefinite"
            dur="1s"
            values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
            keyTimes="0;0.5;1"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
