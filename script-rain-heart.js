function createHeartfall() {
    const heartfall = document.createElement('div');
    heartfall.classList.add('heartfall');
    
    heartfall.style.left = Math.random() * 100 + "vw";
    heartfall.style.animationDuration = Math.random() * 5 + 9 + "s";
    
    heartfall.innerText = '💗';
    
    document.body.appendChild(heartfall);
    
    setTimeout(() => {
                heartfall.remove();
                }, 12000);
  }
  
  setInterval(createHeartfall, 50);
