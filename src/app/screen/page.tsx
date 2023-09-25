import React from 'react';
import Link from 'next/link';
import AguaNotOverwritable from '../aguaNotOverwritable';
import styles from './screen.module.css';
import { Metadata } from "next";




export const metadata: Metadata = {
                
}

function Screen() {
    
    
    
    

    function aguaRender() {
        return(
            <div className={"baseScreen hide-native-scrollbar " + styles["Screen"]}>
                
<div id="layer-2-8d3966c183194d0e9b251de2d3511cfa" className={"baseLayer hide-native-scrollbar " + styles["layer-2-8d3966c183194d0e9b251de2d3511cfa"]}    >
<div id="text-2-a0a1c5cd008048b2a8d177fb5809833a" className={" baseText " + styles["text-2-a0a1c5cd008048b2a8d177fb5809833a"]}   >
    DBox
</div>
</div>
            </div>
        );
    };

    return aguaRender();
}

export default Screen;
            