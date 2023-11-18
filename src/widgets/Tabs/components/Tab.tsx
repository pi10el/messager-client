import { motion } from 'framer-motion';

interface Props {
  condition: [string, string];
  transitionX: number;
  children: React.ReactNode;
  className?: string | undefined;
}

export function Tab({ condition, className, transitionX, children }: Props) {
  return (
    <>
      {condition[0] === condition[1] && (
        <motion.div
          className={className}
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 45,
          }}
          initial={{ x: transitionX }}
          animate={{ x: 0 }}
          exit={{ x: transitionX }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
