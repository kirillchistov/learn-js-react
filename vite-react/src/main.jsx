import { createRoot } from 'react-dom/client';
// import './index.css';
import { App } from './components/App/app';
// import { restaurants } from './materials/mock';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(<App title='Restaurant app' />);
