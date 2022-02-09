import { createContext } from 'react';
import Theme from './Theme';

const ThemeContext = createContext(Theme.light);

export default ThemeContext;
