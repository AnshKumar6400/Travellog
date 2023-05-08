import { Link } from '@mui/material'
import React from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';

function Places(){
  return (
  
<div>
<Link to='./Places'>
<Header/>       
 <a class="navbar-brand" href="#">Places</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/about.html">About</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        check here
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item"
                            href="https://www.thomascook.in/holidays/international-tour-packages">world tour</a>
                        <a class="dropdown-item"
                            href="https://www.holidify.com/collections/best-places-in-the-world">famous places</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </div>

    <div class="container my-2">
        <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7">

                <h2 class="featurette-heading">MALDIVES<span class="text-muted"> sky above, sand below, peace
                        within</span></h2>
                <p class="lead">Tourism is the largest economic industry in the Maldives, as it plays an important role
                    in earning foreign exchange revenues and employing 25,000 people in the tertiary sector of the
                    country. The archipelago of the Maldives is the main source of attraction to many tourists visiting
                    the island country.</p>
            </div>
            <div class="col-md-5">
                <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src="https://source.unsplash.com/500x500/?maldives tourism">
                            </img>
            </div>
        </div>
    </div>
    <div class="container my-2">
        <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">TAJ MAHAL<span class="text-muted"> a tribute to everlasting love :)
                    </span></h2>
                <p class="lead">The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being "the
                    jewel of Muslim art in India and one of the universally admired masterpieces of the world's
                    heritage". It is regarded by many as the best example of Mughal architecture and a symbol of India's
                    rich history. The Taj Mahal attracts more than 6 million visitors a year[3] and in 2007, it was
                    declared a winner of the New 7 Wonders of the World (2000–2007) initiative.</p>
            </div>
            <div class="col-md-5 order-md-1">
                <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src="https://source.unsplash.com/500x500/?taj mahal">
                            </img>
            </div>
        </div>
    </div>
    <div class="container my-2">
        <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7 ">
                <h2 class="featurette-heading">WATER FALLs<span class="text-muted"> just let go-and fall like a little
                        waterfall</span></h2>
                <p class="lead">A waterfall is a point in a river or stream where water flows over a vertical drop or a
                    series of steep drops. Waterfalls also occur where meltwater drops over the edge of a tabular
                    iceberg or ice shelf.Waterfalls can be formed in several ways, but the most common method of
                    formation is that a river
                    courses over a top layer of resistant bedrock before falling on to softer rock, which erodes faster,
                    leading to an increasingly high fall. Waterfalls have been studied for their impact on species
                    living in and around them.</p>
            </div>
            <div class="col-md-5">
                <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src="https://source.unsplash.com/500x500/?water falls">
                        </img>
            </div>
        </div>
    </div>
    <div class="container my-2">
        <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7 order-md-2 ">
                <h2 class="featurette-heading">DESERT<span class="text-muted"> water is a desert's gold</span></h2>
                <p class="lead">A desert is a barren area of landscape where little precipitation occurs and,
                    consequently, living conditions are hostile for plant and animal life. The lack of vegetation
                    exposes the unprotected surface of the ground to denudation. About one-third of the land surface of
                    the Earth is arid or semi-arid. This includes much of the polar regions, where little precipitation
                    occurs, and which are sometimes called polar deserts or "cold deserts". Deserts can be classified by
                    the amount of precipitation that falls, by the temperature that prevails, by the causes of
                    desertification or by their geographical location.</p>
            </div>
            <div class="col-md-5">
                <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src="https://source.unsplash.com/500x500/?desert">
                            </img>
            </div>
        </div>
    </div>
  
        </Link>
</div>


  )
}

export default Places