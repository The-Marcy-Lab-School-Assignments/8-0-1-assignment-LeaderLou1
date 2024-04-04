
const TranslationButtons = ({setGreeting}) => { 

//setGreeting function rerenders Greeting for each language

// languages divided into an array of objects with name and greetings key

    const languages = [{
        name: "Chinese",
        greeting: "早安"
    },
    {
        name: "English", 
        greeting: "Good Morning"
    }
    ,
    {
        name: "Haitan Creole",
        greeting: "Bonjou"

    },
    {
        name: "Portugese",
        greeting: "Bom Dia"
    },
    {
        name: "Spanish",
        greeting: "Buenos Dias"
    }
]

// languages.map creates a button thhat changes the greeting to its corresponding language

// creates a copy of the languages array with the chosen language and its greeting


    
    return (
        <>
        {languages.map(language => {
            
            return (
                <button onClick={() => setGreeting(language.greeting)}>
                    {language.name}
                </button>
            )
        })}
        
        </>
    )
}

export default TranslationButtons