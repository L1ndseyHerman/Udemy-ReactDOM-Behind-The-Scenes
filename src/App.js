import React, {useState, useCallback} from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  //  This useCallback() saves the function so that it won't retrigger and React.memo()s.
  //  It needs an array of dependencies like useEffect(). Instructor says it doesn't need any,
  //  even though my VSCode says it needs showParagraph.
  const toggleParagraphHandler = useCallback(() => {
    //  allowToggle is unfortunately a closure here, aka its value can't change.
    //  This is bec the orig value of it gets stored with the toggleParagraphHandler() function.
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !showParagraph);
    }
    //  Putting it in the dependency array allows it to change.
  }, [allowToggle, showParagraph]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
