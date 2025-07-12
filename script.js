new Splide('#hero-carousel', {
    type: 'loop',
  autoplay: true,       
  interval: 1000,       
  pagination: false,   
  pauseOnHover: true,    
  pauseOnFocus: true 
  }).mount();

  
  new Splide('#products-carousel', {
    // type: 'loop',
    // perPage: 3,
    perMove: 1,
    arrows:false,   
    autoWidth: true,
    // drag   : 'free',
    snap   : true,
  pauseOnHover: true,    
  pauseOnFocus: true, gap: '40px',
  }).mount();

  new Splide('#feature-carousel', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
  autoplay: true,       
  // interval: 1000,       
  pagination: false,   
  pauseOnHover: true,    
  pauseOnFocus: true 
  }).mount();