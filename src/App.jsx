import { useState } from "react";
import characters from "./data/characters.js";

import Characters from "./components/Characters";
import Options from "./components/Options";

const App = () => {
    const [characterSelected, updateCharacter] = useState(0);

    return (
        <>
            <Characters name={ characters[characterSelected].name }
                        description={ characters[characterSelected].description }
                        image={ characters[characterSelected].image }
                        color={ characters[characterSelected].color }/>
            
            <Options updateCharacter={updateCharacter}/>
        </>
    );
}

export default App;