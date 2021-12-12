import React, {useState} from 'react';
import {NavItem} from "./components/NavItem";

export const MarkdownNavbar = React.memo(({navRef, contentRef, className}) => {
    const [activeItemId, setActiveItemId] = useState(0);
    const [navStructure, setNavStructure] = React.useState([]);

    React.useEffect(() => {
        if (contentRef.current && navRef.current) {
            const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6");
            Array.prototype.slice.apply(headings).forEach((h, idx) => {
                h.dataset.id = idx;
                h.id = idx;
            });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const currentY = entry.boundingClientRect.y;
                    const currentRatio = entry.intersectionRatio;
                    const isIntersecting = entry.isIntersecting;
                    if (currentY < 100) {
                        entry.target.classList.add('visible');
                        if (headings[entry.target.id]) setActiveItemId(entry.target.id);
                    } else {
                        entry.target.classList.remove('fancy');
                        if (headings[entry.target.id]) {
                            // headings[entry.target.id].classList.remove('active');
                            // setPrevItemId(entry.target.id)
                        }
                    }
                });
            });

            headings.forEach((header) => {
                observer.observe(header);
            });

            setNavStructure([...headings]);
            return () => observer.disconnect();
        }
    }, [contentRef, navRef])

    return (
        <div style={{position: "fixed", right: 0, top: 0, height: "80vh", overflowY: "auto"}}
             className={`nav-wrapper ${className}`}>
            {navStructure.length && navStructure.map((nd, idx) => {
                return <NavItem node={nd} key={idx}
                                className={activeItemId == nd.id ? "active" : ""}
                                onClick={setActiveItemId}/>
            })}
        </div>
    );
});
