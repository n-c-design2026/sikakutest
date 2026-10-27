window.addEventListener('scroll', () => {
    const wrappaer = document.querySelector('#wrappaer');
    const sikaku = document.querySelector('.sikaku');
    const rect = wrappaer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const rectTop = rect.top;
    const rectHeight = rect.height;
    const totalScrollDistance = rectHeight - windowHeight;
    if (totalScrollDistance <= 0) return;
    const currentScroll = Math.min(totalScrollDistance, Math.max(0, -rectTop))
    const progress = currentScroll / totalScrollDistance;
    const r = Math.round(28 + (35 - 28) * progress);
    const g = Math.round(139 + (166 - 139) * progress);
    const b = Math.round(218 + (175 - 218) * progress);


    sikaku.style.backgroundColor = `rgb(${r},${g},${b})`;
    console.log(r);
});