import {h, app} from 'hyperapp'

export default function Content({state, actions}) {
     return (
          <div class="container allcontent">
               <div class="container searchbar">
                    <div class="container searchlabels">
                         <ul>
                              <li class="activeli">
                                   <div class="ion-videocamera icon"></div>
                                   <a href="#" class="activelink" >in theaters</a>
                              </li>
                              <li class="">
                                   <div class="ion-ios-timer icon"></div>
                                   <a href="#">coming soon</a>
                              </li>
                              <li class="">
                                   <div class="ion-ios-pie icon"></div>
                                   <a href="#">charts</a>
                              </li>
                              <li class="">
                                   <div class="ion-ios-monitor icon"></div>
                                   <a href="#">tv series</a>
                              </li>
                              <li class="">
                                   <div class="ion-ios-film icon"></div>
                                   <a href="#">trailers</a>
                              </li>
                              <li class="">
                                   <div class="dropdown show">
                                        <div class="ion-ios-film icon"></div>
                                        <a class="btn btn-secondary dropdown-toggle"  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>


                                   </div>
                              </li>
                              <li>
                                   <button type="button" class="btn">
                                        <div class="ion-android-star icon"></div>
                                        <span>179</span>
                                   </button>
                              </li>
                         </ul>
                    </div>
                    <div class="row rating-search-bar">
                         <div class="col-12 col-md-8">
                              <div class='iconwrap' style={{display: 'inline-block'}}>
                                   <div class="ion-navicon-round icon"></div>
                                   <div class="ion-grid icon"></div>
                              </div>
                              <div class="rating-bar-wrapper" style={{display: 'inline-block'}}>
                                   <h5>IMDb Rating</h5>
                                   <div class="rating-bar">
                                        <div class="circle a"></div>
                                        <div class="circle b"></div>
                                        <div id="ratewrap">
                                             <span id="rate">6.8</span>
                                             <div id="point"></div>
                                        </div>
                                        <div class="filler-bar inner"></div>
                                        <div class="filler-bar fill"></div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-6 col-md-4">
                              <form>
                                   <div class="form-group">
                                        <a href="#" class="ion-ios-search-strong"></a>
                                        <input type="text" class="form-control"></input>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
               <div class="container content">
                    <div class="card" >
                         <img class="card-img-top" src="https://filmwonk.files.wordpress.com/2016/01/mad-max-fury-road-poster2.jpg" alt="Card image cap" />
                         <div class="card-body">
                              <h5 class="card-title">Resident Evil</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Horror, Sci-fi, Action</h6>
                              <div class="rating">
                                   <div class="ion-ios-heart"></div>
                                   <h5 id="numberRating">6.8</h5>
                              </div>
                              <a href="#" class="">
                                   <div id="corner-triangle">
                                        <span class="triangle-text">+</span>

                                   </div>
                              </a>
                         </div>
                    </div>

                    <div class="card" >
                         <img class="card-img-top" src="https://i.pinimg.com/736x/a8/fc/af/a8fcaf6b1f21a0cc1bd3483f332af28e--hunger-games-mockingjay-the-hunger-games.jpg" alt="Card image cap" />
                         <div class="card-body">
                              <h5 class="card-title">Resident Evil</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Horror, Sci-fi, Action</h6>
                              <div class="rating">
                                   <div class="ion-ios-heart"></div>
                                   <h5 id="numberRating">6.8</h5>
                              </div>
                              <a href="#" class="">
                                   <div id="corner-triangle">
                                        <span class="triangle-text">+</span>

                                   </div>
                              </a>
                         </div>
                    </div>

                    <div class="card">
                         <img class="card-img-top" src="https://www.bleedingcool.com/wp-content/uploads/2018/04/avengers-infinity-war-poster-6.jpg" alt="Card image cap" />
                         <div class="card-body">
                              <h5 class="card-title">Resident Evil</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Horror, Sci-fi, Action</h6>
                              <div class="rating">
                                   <div class="ion-ios-heart"></div>
                                   <h5 id="numberRating">6.8</h5>
                              </div>
                              <a href="#" class="">
                                   <div id="corner-triangle">
                                        <span class="triangle-text">+</span>

                                   </div>
                              </a>
                         </div>
                    </div>

                    <div class="card" >
                         <img class="card-img-top" src="http://www.impawards.com/2015/posters/insurgent_ver13_xlg.jpg" alt="Card image cap" />
                         <div class="card-body">
                              <h5 class="card-title">Resident Evil</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Horror, Sci-fi, Action</h6>
                              <div class="rating">
                                   <div class="ion-ios-heart"></div>
                                   <h5 id="numberRating">6.8</h5>
                              </div>
                              <a href="#" class="">
                                   <div id="corner-triangle">
                                        <span class="triangle-text">+</span>

                                   </div>
                              </a>
                         </div>
                    </div>

                    <div class="card" >
                         <img class="card-img-top" src="http://www.reellifewithjane.com/wp-content/uploads/2015/09/Everest-Poster.jpg" alt="Card image cap" />
                         <div class="card-body">
                              <h5 class="card-title">Resident Evil</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Horror, Sci-fi, Action</h6>
                              <div class="rating">
                                   <div class="ion-ios-heart"></div>
                                   <h5 id="numberRating">6.8</h5>
                              </div>
                              <a href="#" class="">
                                   <div id="corner-triangle">
                                        <span class="triangle-text">+</span>

                                   </div>
                              </a>
                         </div>
                    </div>

                    <div class="card" >
                         <img class="card-img-top" src="https://static.posters.cz/image/750/plakaty/blade-runner-2049-fire-ice-i50059.jpg" alt="Card image cap" />
                         <div class="card-body">
                              <h5 class="card-title">Resident Evil</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Horror, Sci-fi, Action</h6>
                              <div class="rating">
                                   <div class="ion-ios-heart"></div>
                                   <h5 id="numberRating">6.8</h5>
                              </div>
                              <a href="#" class="">
                                   <div id="corner-triangle">
                                        <span class="triangle-text">+</span>

                                   </div>
                              </a>
                         </div>
                    </div>
               </div>
               <div class="container bottom">
                    <div class="ion-load-a"></div>
               </div>
          </div>
     )
}
