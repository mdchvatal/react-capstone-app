import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';


export const MeritCarousel2 = () => {
    return (
        <div> 
            <div className='container-fluid' >  
                <Carousel interval={600} keyboard={false} pauseOnHover={true}>  
                    <CarouselItem style={{'height':"200px"}}  >  
                        <img style={{'height':"200px"}}  
                         //className="d-block w-100"  
                        src='assets/imgages/check.jpg'
                        alt='checking' />  
                            <CarouselCaption>  
                                <h3>First Demo</h3>  
                            </CarouselCaption>  
                    </CarouselItem  >  
                    <CarouselItem style={{'height':"300px"}}>  
                                 <img style={{'height':"300px"}}    
                                    src={'assets/img/img1.jpg'}    />
                                       <CarouselCaption>  
                                   <h3>Second Demo</h3>  
                                      </CarouselCaption>  
                    </CarouselItem>  
                                       <CarouselItem style={{'height':"300px"}}> 
                                       <img style={{'height':"300px"}}
                                        className="d-block w-100"  
                                         src={'assets/img/img3.jpg'}   />
                                        <CarouselCaption>  
                                          <h3>Third Demo</h3>  
                                          </CarouselCaption>  
                                         </CarouselItem>  
                                        </Carousel>  
            </div>
        </div>  
                    
                )  

   /* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="assets/images/clipart3386520.png"  alt="retirement" height='200px' />
        </div>
        <div class="carousel-item">
            <img src="assets/images/check.jpg" alt="checking" height='200px'/>
        </div>
        <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..."/>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </div>*/
    
}