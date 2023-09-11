import './App.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {  
  const [markdownText, setMarkdownText] = useState("");
  const handleMarkdownChange = (e) =>{
    setMarkdownText(e.target.value);
  }
  return (
    <div className="app-container">
        <h1>Markdown Previewer</h1>    
        <div className="container">
          <div className="editor">
            <textarea id="editor"
            value={markdownText}
            onChange={handleMarkdownChange}
            placeholder='Enter your Markdown here...'
            />    
          </div>
          <div className="resize-handle"></div>


          <div className="preview">
            <ReactMarkdown id="prdeview"  children={markdownText} />       
          </div>
        </div>
    </div>
    
  );
}
export default App;