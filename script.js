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


  


  document.addEventListener('DOMContentLoaded', function () {
    var main = new Splide('#main-slider', {
      type: 'fade',
      heightRatio: 0.5,
      pagination: false,
      arrows: false,
      cover: true,
    });

    var thumbnails = new Splide('#thumbnail-slider', {
      rewind: true,
      perPage: 4,
      fixedWidth: 104,
      fixedHeight: 58,
      isNavigation: true,
      gap: 10,
      pagination: false,
      breakpoints: {
        640: {
          fixedWidth: 66,
          fixedHeight: 38,
        },
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  });
