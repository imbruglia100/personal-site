import * as THREE from 'three';
import React, {useEffect, useState, useRef} from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';

export const Background = ({children, className}) => {

    const vantaRef = useRef();
    const [vantaEffect, setVantaEffect] = useState(0)

    useEffect( () => {
        if(!vantaEffect){
        setVantaEffect(WAVES({
                el: vantaRef.current,
                THREE,
                mouseControls: false,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                shininess: 15,
                waveHeight: 26.50,
                waveSpeed: 0.40,
                color: 0x000927
        }))
    }
        return () => {
            if(vantaEffect) vantaEffect.destroy();
        }
    }, [vantaEffect])
    return (
        <div className={className} ref={vantaRef}>
            {children}
        </div>
    )
}
