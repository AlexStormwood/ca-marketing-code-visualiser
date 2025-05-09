
import { useState } from 'react'
import './App.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTypewriter } from 'react-simple-typewriter';



function App() {

  let [codeInputText, setCodeInputText] = useState(`function diplomaWebDev(){

    let joinUs = "What's Stopping You From Learning WebDev?";
    let startLearning = "This is your chance to start.";
    let upskill = "Get a peek at what you'll create with webdev skills.";
    let nextIntake = "Next Intake on 02 June";
    let courseGuide = "Download Course Guide";

    console.log(joinUs, startLearning, upskill, nextIntake, courseGuide);
}`);
  let [codeInputLang, setCodeInputLang] = useState("javascript");
  let [renderDeleteSpeed, setRenderDeleteSpeed] = useState(0);
  let [renderDelaySpeed, setRenderDelaySpeed] = useState(5000);
  let [renderTypeSpeed, setRenderTypeSpeed] = useState(20);


  let [typeWriterText] = useTypewriter({
    words: [codeInputText],
    loop: 0,
    deleteSpeed: renderDeleteSpeed,
    delaySpeed: renderDelaySpeed,
    typeSpeed: renderTypeSpeed
  });

  return (
    <main>
      <section className='codeInputSection'>
        <div>
          <label htmlFor="rendererTypeSpeed">Animation Typing Speed (milliseconds):</label>
          <input type="number" name="rendererTypeSpeed" id="rendererTypeSpeed" value={renderTypeSpeed} onChange={(event) => setRenderTypeSpeed(event.target.value)} />
        </div>
        <div>
          <label htmlFor="rendererDelaySpeed">Time Between Loops (milliseconds):</label>
          <input type="number" name="rendererDelaySpeed" id="rendererDelaySpeed" value={renderDelaySpeed} onChange={(event) => setRenderDelaySpeed(event.target.value)} />
        </div>
        <div>
          <label htmlFor="rendererDeleteSpeed">Animation Loop Delete Speed (milliseconds):</label>
          <input type="number" name="rendererDeleteSpeed" id="rendererDeleteSpeed" value={renderDeleteSpeed} onChange={(event) => setRenderDeleteSpeed(event.target.value)} />
        </div>
        <select name="codeInputLanguage" id="codeInputLanguage" value={codeInputLang} onChange={(event) => setCodeInputLang(event.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="python">python</option>
        </select>
        <textarea type="text" name="codeInputText" id="codeInputText" value={codeInputText} onChange={(event) => setCodeInputText(event.target.value)} />
        
      </section>
      <section className='codeRendererSection'>
        <SyntaxHighlighter language={codeInputLang} style={a11yDark} customStyle={{minHeight: "70dvh"}}>
          {typeWriterText}
        </SyntaxHighlighter>
      </section>
    </main>
  )
}

export default App
