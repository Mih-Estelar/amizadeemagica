document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
        
        document.querySelector('.tab-content').scrollIntoView({ behavior: 'smooth' });
    });
});

function createStar() {
    const star = document.createElement('div');
    star.innerHTML = '⭐';
    star.style.position = 'fixed';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = '100vh';
    star.style.fontSize = (Math.random() * 1 + 0.5) + 'em';
    star.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
    star.style.pointerEvents = 'none';
    star.style.zIndex = '9999';
    document.body.appendChild(star);
    
    setTimeout(() => star.remove(), 5000);
}

setInterval(createStar, 800);

window.addEventListener('load', () => {
    document.querySelector('.tab-btn[data-tab="inicio"]').click();
});
