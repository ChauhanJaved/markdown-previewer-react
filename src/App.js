import './App.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {  
  const [markdownText, setMarkdownText] = useState("");
  const handleMarkdownChange = (e) =>{
    setMarkdownText(e.target.value);
  }
  return (
    <div>
      <textarea 
        id="editor" 
        rows="10"
        cols="20"
        value={markdownText}
        onChange={handleMarkdownChange}
        placeholder='Enter your Markdown here...'
      >

      </textarea>
      <ReactMarkdown id="preview" className="preview">
        {markdownText}
      </ReactMarkdown>
    </div>
  );
}

export default App;
