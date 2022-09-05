import React from 'react';
// import { EditorContext } from '../index';

export default function useEditor() {
    const EditorContext = React.createContext({});

    return React.useContext(EditorContext);
}
