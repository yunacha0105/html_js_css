const rects = document.querySelectorAll('.rectangle');
const n = rects.length;
rects.forEach((rect, i) => {
    const angle = ((360 / n))* i;
    rect.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(0, -380px)`;
});

const rects2 = document.querySelectorAll('.rectancle2');
const l = n * 4;
rects2.forEach((rect, i) => {
    const angle2 = (360 / l) * i;
    rect.style.transform = `translate(-50%, -50%) rotate(${angle2}deg) translate(0, -380px)`;
})`
function f01(r){
    const page = r.dataset.page;
        console.log("클릭된 요소:", r);
    console.log("page 값:", page);
    location.href = `./moodboard/${page}.html`;
}