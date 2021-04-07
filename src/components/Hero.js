import React from 'react'
import Welctext from "./Welctext"
import WelcImage from "./WelcImage"

const Hero = () => {
    return (
        <section class="welcome-sect">
            <div class="container">
                <WelcImage></WelcImage>
                <Welctext></Welctext>
            </div>
        </section>
    )
}

export default Hero
