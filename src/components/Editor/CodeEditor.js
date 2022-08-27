// https://codesandbox.io/s/u6vhk?file=/src/Editor.js:180-207
// https://github.com/satya164/react-simple-code-editor
import React, {Fragment, useEffect, useState} from 'react'
import {Buffer} from 'buffer';
import Editor from 'react-simple-code-editor';
import {useDispatch, useSelector} from "react-redux";
import {setCode, setFileSha} from "../../redux/editor";
import { highlight, languages } from "prismjs/components/prism-core";
import dracula from 'prism-react-renderer/themes/dracula';
import {getContent, updateContent} from "../../lib/gh/utils";
import {REQUEST_STATUS} from "../../lib/const/requestStatus";
import Highlight, {defaultProps} from "prism-react-renderer";

import '../../resources/styles/editor.css';

const styles = {
    root: {
        background: '#1e1e1e',
        boxSizing: 'border-box',
        fontFamily: '"Dank Mono", "Fira Code", monospace',
        ...dracula.plain,
        overflow: 'auto !important',
        border: '1px solid #2D2D2DFF'
    }
}

export default function CodeEditor() {
    const editor = useSelector((state) => state.editor.code)
    const fileSha = useSelector((state) => state.editor.fileSha)
    const action = useSelector((state) => state.editor.selectedAction)
    const repository = useSelector((state) => state.editor.selectedRepo)
    const octokit = useSelector((state) => state.core.octo)
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

    const dispatch = useDispatch()

    useEffect(() => {
        async function getActionCode() {
            try {
                if (repository === null) {
                    return
                }
                const actionText = await getContent(octokit, repository.owner, repository.name, action.path);
                dispatch(setFileSha(actionText.data.sha));
                dispatch(setCode(actionText.data.content));
                setRequestStatus(REQUEST_STATUS.SUCCESS);

            } catch (e) {
                console.error(e);
                setRequestStatus(REQUEST_STATUS.FAILURE);
            }
        }

        getActionCode();
    }, [action]);

    const hightlightWithLineNumbers = (input, language) =>
        highlight(input, language)
            .split("\n")
            .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
            .join("\n");

    const hl = code => (
        <Highlight {...defaultProps} theme={dracula} code={code} language="yaml">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <Fragment>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({line, key: i})}>
                            {line.map((token, key) => <span {...getTokenProps({token, key})} />)}
                        </div>
                    ))}
                </Fragment>
            )}
        </Highlight>
    )

    return (
        <div className="row m-4">
            <button className="btn btn-secondary mb-2" onClick={() => {
                updateContent(
                    octokit,
                    repository.owner,
                    repository.name,
                    action.path,
                    "Updating from GHAM",
                    editor,
                    fileSha
                )
            }} type="button">Push To GitHub</button>

            <Editor
                value={Buffer.from(editor, "base64").toString()}
                onValueChange={(code) => {
                    const encodedCode = btoa(code)
                    dispatch(setCode(encodedCode))
                }}
                highlight={hl => hightlightWithLineNumbers(hl, languages.plain)}
                padding={30}
                style={styles.root}
                textareaId="codeArea"
                className="editor"
            />
        </div>
    )
}
