import React from "react";
import ReactMarkdown from "react-markdown";
import './App.css';
// import article from "./article";
// import {MarkdownNavbar} from "./components/MarkdownNavbar/MarkdownNavbar";

function App() {
    const navRef = React.useRef(null);
    const containerRef = React.useRef(null);

    return (
        <div className="App">
            <div className="pa1" ref={containerRef}>
                {/*<div className="article-container" ref={containerRef.current}>*/}
                {/*    <ReactMarkdown children={article}/>*/}
                {/*</div>*/}
                {/*<div className="article-navbar" ref={navRef}>*/}
                {/*    <MarkdownNavbar source={article} contentRef={containerRef} navRef={navRef}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;
