import React from 'react';
import './NavItem.css';

export const NavItem = React.memo(({node, className, onClick}) => {
    const nodeRef = React.useRef(null);

    console.log(node.id, "rerender");

    React.useLayoutEffect(() => {
        if (node?.innerHTML) nodeRef.current.innerHTML = node.innerHTML;
    }, [node]);

    if (!node?.nodeName) return null;
    const TageName = node.nodeName.toLowerCase();

    return (
        <TageName className={`markdown-nav-item ${node.className} ${className ? className : ""}`}
                  onClick={() => onClick(node.id)}>
            <a href={`#${node.id}`} style={{padding: 5}}>
                <span className="no-events" ref={nodeRef}/>
            </a>
        </TageName>
    );
});
