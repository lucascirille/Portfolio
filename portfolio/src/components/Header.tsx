import styles from './Header.module.css'
import { useEffect } from 'react'

const Header=()=>{
    let principal=window.scrollY
    const detectScroll= ()=>{
        let actual=window.scrollY
            const h:any = document.querySelector('header');
            h.classList.toggle(`${styles.down}`,actual>principal);
        principal=actual
    }

    useEffect(()=>{
        
        window.addEventListener('scroll',detectScroll)

        return ()=>{
            removeEventListener('scroll',detectScroll)
        }
    },[])


    return (
    <>
        <header className={`${styles.header}`}>
            <a href="google.com" className={styles.logo}>Clickeame</a>
            <nav>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Nosotros</a></li>
                    <li><a href='#'>Portafolio</a></li>
                    <li><a href='#'>Servicios</a></li>
                </ul>
            </nav>
        </header>
        <section className={styles.zone1}>

        </section>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil cum tenetur quam sed nulla perspiciatis id. Hic maxime perspiciatis eligendi, perferendis fuga rerum magnam quas aperiam veritatis incidunt recusandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil cum tenetur quam sed nulla perspiciatis id. Hic maxime perspiciatis eligendi, perferendis fuga rerum magnam quas aperiam veritatis incidunt recusandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil cum tenetur quam sed nulla perspiciatis id. Hic maxime perspiciatis eligendi, perferendis fuga rerum magnam quas aperiam veritatis incidunt recusandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil cum tenetur quam sed nulla perspiciatis id. Hic maxime perspiciatis eligendi, perferendis fuga rerum magnam quas aperiam veritatis incidunt recusandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil cum tenetur quam sed nulla perspiciatis id. Hic maxime perspiciatis eligendi, perferendis fuga rerum magnam quas aperiam veritatis incidunt recusandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil cum tenetur quam sed nulla perspiciatis id. Hic maxime perspiciatis eligendi, perferendis fuga rerum magnam quas aperiam veritatis incidunt recusandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil cum tenetur quam sed nulla perspiciatis id. Hic maxime perspiciatis eligendi, perferendis fuga rerum magnam quas aperiam veritatis incidunt recusandae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil cum tenetur quam sed nulla perspiciatis id. Hic maxime perspiciatis eligendi, perferendis fuga rerum magnam quas aperiam veritatis incidunt recusandae.</p>
        
    </>
    )
}

export default Header