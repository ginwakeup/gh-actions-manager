import React, { Fragment, useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor';
import {useDispatch, useSelector} from "react-redux";
import {setCode} from "../../redux/editor/editorSlice";
import Highlight, { defaultProps } from 'prism-react-renderer'
import dracula from 'prism-react-renderer/themes/dracula';
import {getContent} from "../../lib/gh/utils";
import {REQUEST_STATUS} from "../../lib/const/requestStatus";

const styles = {
    root: {
        boxSizing: 'border-box',
        fontFamily: '"Dank Mono", "Fira Code", monospace',
        ...dracula.plain,
        height:500
    }
}

export default function CodeEditor() {
    const editor = useSelector((state) => state.editor.value.code)
    const action = useSelector((state) => state.editor.value.action)
    const octokit = useSelector((state) => state.octo.value)
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

    const dispatch = useDispatch()

    useEffect(() => {
        async function getActionCode() {
            try {
                console.log(action)
                const actionText = await getContent(octokit, action.repo.owner, action.path);
                console.log(actionText);
                dispatch(setCode(actionText));
                setRequestStatus(REQUEST_STATUS.SUCCESS);

            } catch (e) {
                console.log(e);
                setRequestStatus(REQUEST_STATUS.FAILURE);
            }
        }

        getActionCode();
    }, [action]);

    const highlight = code => (
        <Highlight {...defaultProps} theme={dracula} code={code} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Fragment>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                        </div>
                    ))}
                </Fragment>
            )}
        </Highlight>
    )

    return (
        <Editor
            value={editor}
            onValueChange={(code) => (
                dispatch(setCode(code))
            )}
            highlight={highlight}
            padding={10}
            style={styles.root}
        />
    )
}
