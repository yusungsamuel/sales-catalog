import React from "react"
import "./style.css"
function About() {

    return (
        <div>
            <div className="row about">
                <div className="col-6 about-left"></div>
                <div className="about-right col-6">
                    <a href="/"><i class="fas fa-times fa-3x"></i></a>
                    <div className="description mx-5">
                    <header>Sales Calatalog</header>
                    <p>Save Time! Save Money! Sales catalog is an one-stop "shop" for you to browse on sale items from your favorite brands. We collect current on sale item information from these fashion brands and display it all on one page.</p>
                    <p>Can't find your favorite brand? Stay tuned! They will be added soon.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;