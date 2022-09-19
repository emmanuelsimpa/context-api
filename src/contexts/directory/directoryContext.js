import { createContext } from 'react';
import DIRECTORY_DATA from './directoryData';

const DirectoryContext = createContext(DIRECTORY_DATA);

export default DirectoryContext;