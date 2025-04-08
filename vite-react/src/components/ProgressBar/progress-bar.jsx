import { useProgress } from '../../hooks/use-progress';
import styles from './progbar.module.css';

export const ProgressBar = () => {
  const scrollProgress = useProgress();

  return <div className={styles.progressBar} style={{ width: scrollProgress }} />;
};
