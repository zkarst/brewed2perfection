
    const Bean = document.getElementsByClassName('coffeeBean');
    const nav = document.getElementsByClassName('nav-item');

   
    const brownBean = new Image();
    brownBean.src = 'images/coffeeBean-brown.png';

   
    const whiteBean = new Image();
    whiteBean.src = 'images/coffeeBean-white.png';

    
    if (Bean.length > 0) {
        
        console.log("Bean is Brown");
        
        Bean[0].src = brownBean.src;
    } else {
        
        console.log("Bean is White");
     
    }


