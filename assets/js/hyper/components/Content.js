import {h, app} from 'hyperapp'

export default function Content({state, actions}) {
     var loopMovieCards = function() {
          return state.globalState.movieCards.map(function(item){
               return (
                    <div class="card" >
                         <img class="card-img-top" src={item.img} alt="Card image cap" />
                         <div class="card-body">
                              <h5 class="card-title">{item.title}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">{item.genre}</h6>
                              <div class="rating">
                                   <div class="ion-ios-heart"></div>
                                   <h5 id="numberRating">{item.rating}</h5>
                              </div>
                              <a href="#" class="">
                                   <div id="corner-triangle">
                                        <span class="triangle-text">+</span>

                                   </div>
                              </a>
                         </div>
                    </div>
               )
          });
     }

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
                    {loopMovieCards()}
               </div>
               <div class="container bottom">
                    <div class="ion-load-a"></div>
               </div>
          </div>
     )
}
