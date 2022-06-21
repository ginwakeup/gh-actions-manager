import React from 'react';
import MonacoEditor from '@uiw/react-monacoeditor';

export default function CodeEditor() {
    return (
        <div style={{height: 500}}>
            <MonacoEditor
                language="yaml"
                options={{
                    theme: 'vs-dark',
                    automaticLayout: false,
                }}
            />
        </div>
    )
}
