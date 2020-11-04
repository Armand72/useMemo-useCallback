import React from 'react';
import { useEffect,useState } from 'react';

const ChildSolution = ({multiplicationChild}) => {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        setNumber(multiplicationChild());

        console.log('child component rendered');
    }, [multiplicationChild]);

    return <h1>{number}</h1>

}
 
export default ChildSolution;