import React, { useRef } from 'react';
import './styles/switchCheck.css';



function SwitchCheck({setDarkMode, checked, setChecked}) {
    const ref = useRef(null);
    function handleChange(){
        setChecked(ref.current.checked);
        setDarkMode(ref.current.checked);       
    }
    return(
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} onChange={handleChange} checked={checked} type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="switch">
            </label>
        </div>        
    );
}
export default SwitchCheck;