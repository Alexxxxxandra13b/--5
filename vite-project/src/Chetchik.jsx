
import React, { useState } from 'react';
function Chetchik() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p> Нажали  {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Не нажали
            </button>
        </div>
    );
}
export default Chetchik;