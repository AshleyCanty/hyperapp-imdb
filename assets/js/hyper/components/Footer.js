import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
     return (
          <div class="container footer">
               <div class="row top">
                    <div class="col-sm-4 f">
                         <h5 id="brand">IMDb</h5>
                    </div>
                    <div class="col-sm-4 s">
                         <div class="icons">
                              <div class="ion-social-twitter"></div>
                              <div class="ion-social-facebook"></div>
                              <div class="ion-social-instagram"></div>
                         </div>
                    </div>
                    <div class="col-sm-4 t">
                         <h6 id="copyright">1990-2015 IMDB.COM, INC.</h6>
                    </div>
               </div>
               <div class="row bottom">
                    <div class="col-sm">
                         <div class="borderline"></div>
                         <h6 class="">show menu</h6>
                    </div>
               </div>
          </div>
     )
}
