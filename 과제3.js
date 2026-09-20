const rects = document.querySelectorAll('.rectangle');
const n = rects.length;
rects.forEach((rect, i) => {
    const angle = 140
    const angleDiff = (angle / n)* i - (angle/2) + 10;
    rect.style.transform = `translate(-50%, -50%) rotate(${angleDiff}deg) translate(0, -380px)`;
});

const rects_pop = document.querySelectorAll('.rectangle2');
const l = rects_pop.length;
const color = ["redmahogany", "arabianspice", "mutedclay", "clouddancer", "foxglove", "allaboard", "burntolive"];
rects_pop.forEach((rect, i) => {
    const angle = 140
    const angleDiff = (angle / n)* i - (angle/2) + 10;
    rect.style.transform = `translate(-50%, -50%) rotate(${angleDiff}deg) translate(0, -590px)`;

    const color_name = color[i]
    for (let j = 1; j <= 4; j +=1){
        const img = document.createElement('img');
        img.src = `./moodboard/image/circle2/${color_name}${j}.jpg`;
        rect.appendChild(img);}
});

// const img = document.querySelectorAll('img')
// img.forEach((img, i) => {
//     const angle = 180
//     const angleDiff = (angle / (n*l))*i - (angle/2) +10;
//     img.style.transform = `translate(-50%, -50%) rotate(${angleDiff}deg) translate(0, -520px)`
// })

    
function f01(r){
    const page = r.dataset.page;
    console.log("클릭된 요소:", r);
    console.log("page 값:", page);
    location.href = `./moodboard/${page}.html`;
}