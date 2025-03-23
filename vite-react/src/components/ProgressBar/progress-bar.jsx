import { useProgress } from '../../hooks/use-progress';
import progBarStyle from './progbar.module.css';

export const ProgressBar = () => {
  const scrollProgress = useProgress();

  return <div className={progBarStyle.progressBar} style={{ width: scrollProgress }}></div>;
};
