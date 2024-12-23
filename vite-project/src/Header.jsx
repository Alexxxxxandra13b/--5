
// Создаём файл Header.js в папке src/ import React from 'react';
import { useState } from 'react';
function Header() {
    const [name, setName] = useState("Александра");
    function change (){
        if (name== "НеАлександа") setName("Александра") 
        else
        setName("НеАлександра")
    }
    return (
        <header>
            <h1>Привет, Worlds!</h1>
           <h2>Привет, {name}! </h2>
           <button onClick={change}>
               Кнопка
            </button>
        </header>
    );
}
export default Header;