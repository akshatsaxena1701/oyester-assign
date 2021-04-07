import React from 'react'
import SectImages from "./LandImage"
import Landtext from "./Landtext"
const Landing = () => {
    return (
        <section class="landing-sect">
            <div class="container">
                <Landtext></Landtext>
                <SectImages></SectImages>
            </div>
        </section>
    )
}

export default Landing
