import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import TranslationButtons from './components/TranslationButtons'
import SizingButtons from './components/SizingButtons'

const App = () => { //DESTRUCTURING
    const [greeting, setGreeting] = useState("Goodmorning")

    
    return (
        <div className='App'>
            hi 
            <Greeting greeting={greeting} setGreeting={setGreeting}  /> 
            <TranslationButtons setGreeting={setGreeting}></TranslationButtons>
        </div>
    );
};

export default App
