import React from 'react'
import css from './HelpCard.module.css'

export const HelpCard = ({title, bg}) => {
    return (<div className={css.helpCard} style={{background:bg}} >
        <hr/>
        <h3>{title}</h3>
    </div>
    )
}
