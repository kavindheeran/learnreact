import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "black",
        padding: "10px"
    }
  return (
    <div>
        <h1 style = { myStyle }> Header Component</h1>
        <h1 className = { styles.bigBlue }> subheading </h1>
    </div>
  )
}
