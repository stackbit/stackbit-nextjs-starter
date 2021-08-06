import React from 'react';
import Markdown from 'markdown-to-jsx';

export default function InlineMarkdown(props) {
    return (
        <Markdown options={{ forceInline: true, overrides }}>
            {props.children}
        </Markdown>
    );
}

const overrides = {
    strong: {
        component: (props) => {
            return <span className="sb-highlight inline-block">{props.children}</span>;
        }
    }
};
