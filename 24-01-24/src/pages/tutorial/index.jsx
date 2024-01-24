import styles from '../../styles/tutorial.module.scss'
import Image from "next/image";
import Link from 'next/link'

export default function Tutorial() {
    return (
        <div className={styles.boxTut}>
            <div className={styles.navbar}>
               <img width="80" height="80" src="https://img.icons8.com/officel/80/pokedex.png" alt="pokedex"/>
               <h2>Tutorial!</h2>
            </div>
            <Image width="1200" 
                 height="900" 
                 src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2022/01/28/pokemon-legends-arceus-pokedex-size_feature.jpg"
                 alt="Valley"
            />
            <p>The Pokédex keeps track of the Pokémon you’ve seen and caught.
                 Use the Pokédex to learn more about the different species of Pokémon and their Evolutions.
                Pokémon you’ve caught appear in color. Pokémon you’ve seen but haven’t caught appear as silhouettes;
                this includes Pokémon seen during encounters as well as at Gyms. 
                Pokémon you’ve neither seen nor caught appear as their Pokédex number.
                To view unique categories of Pokémon you’ve seen or caught, 
                tap the ALL button on the bottom right-hand corner of the Pokédex screen. 
                You will then be able to select any category that you have unlocked. 
                You must catch a certain number of Pokémon to unlock new categories, 
                so they may not all be immediately available to you.
                When a new category becomes available, you will be alerted in-game.
            </p>
        <Link href="/">Homepage</Link>
        </div>
    )
}