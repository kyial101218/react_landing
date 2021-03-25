import React from 'react'
import css from './HelpCard2.module.css'

export const HelpCard2 = ({title, bg}) => {
    return (<div className={css.helpCard2} style={{background:bg}} >
            <hr/>
           
            <h3>{title}</h3>
            </div>
    )
}
