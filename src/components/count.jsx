import { useState } from 'react';

function Count() {
    let [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter Component</h1>
            <div>
                <button type="button" onClick={() => setCount(count+=1)}>+1</button>
                <button type="button" onClick={() => setCount(count+=5)}>+5</button>
                <button type="button" onClick={() => setCount(count+=100)}>+100</button>
            </div>

            <div style={{ marginTop: '25px'}}>
                <button type="button" onClick={() => setCount(count-=1)}>-1</button>
                <button type="button" onClick={() => setCount(count-=5)}>-5</button>
                <button type="button" onClick={() => setCount(count-=100)}>-100</button>
            </div>
            
            <h4>Count value is {count}</h4>
        </div>
    )
}

export default Count;