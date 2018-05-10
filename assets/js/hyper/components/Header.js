import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
     return (
          <div class="lg-container">

               <div class="jain-container">
                    <div class="jumbotron">
                         <nav class="navbar navbar-expand-md  navbar-dark ">
                              <a class="navbar-brand" href="#"><img src="http://www.razmag.com/wp-content/uploads/2015/10/Screen-Shot-2015-10-15-at-09.17.42.png" /></a>
                              <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                   <span class="navbar-toggler-icon"></span>
                              </button>

                              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                   <ul class="navbar-nav">
                                        <li class="nav-item dropdown position-relative">
                                             <a class="nav-link dropdown-toggle effect-1" href="https://bootstrapthemes.co" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  Movies
                                             </a>
                                        </li>
                                        <li class="nav-item dropdown position-relative">
                                             <a class="nav-link dropdown-toggle" href="https://bootstrapthemes.co" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  Gallery
                                             </a>
                                        </li>
                                        <li class="nav-item dropdown position-relative">
                                             <a class="nav-link dropdown-toggle" href="https://bootstrapthemes.co" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  Community
                                             </a>
                                        </li>

                                        <li class="nav-item dropdown position-relative">
                                             <a class="nav-link dropdown-toggle" href="https://bootstrapthemes.co" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  News
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                         </nav>
                         <div class="container hero">
                              <div class="row">

                                   <div class="col-md-12">
                                       <h1 class="display-4">The Martian</h1>
                                       <h5 class="label">adventure</h5>
                                       <h5 class="label">sci-fi</h5>
                                       <h5 class="label">thriller</h5>
                                       <a href="#">
                                            <div class="btn-wrap">
                                                  <button id="playButton">
                                                       <span>Watch Trailer</span>
                                                       <div id="circlewrap">
                                                            <div class="ion-ios-play"></div>
                                                       </div>

                                                  </button>
                                             </div>
                                        </a>
                                   </div>

                              </div>
                              <div class="row datetext">
                                   <div class="col-md-12">
                                        <h5 class="releaseDate" id="location">In theaters</h5>
                                        <h5 class="releaseDate" id="date">15 Oct, 2015 (USA)</h5>
                                   </div>
                              </div>
                         </div>
                         <div class="row hero-2">
                         </div>
                     </div>
          </div>


</div>
     )
}
