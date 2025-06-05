


function pofileComponent(name, description, imgname, commentCount, shareCount, likeCount, parentElm) {
    // const style = document.createElement('style')
    let cmCnt = commentCount;
    const cmk = commentCount / 1000;
    if (cmk >= 1) {
        cmCnt = cmk.toFixed(2);
    }

    let rpCnt = shareCount;
    const rpk = shareCount / 1000;
    if (rpk >= 1) {
        rpCnt = rpk.toFixed(2);
    }

    let lkCnt = likeCount;
    const lk = likeCount / 1000;
    if (lk >= 1) {
        lkCnt = lk.toFixed(2);
    }
    const container = document.createElement('div');
    container.id = "container"
    let html = `
        <div id="imgContainer">
            <img id="img" src="./static/${imgname != "" ? imgname : "default.png"}" alt="">
        </div>
        <div id="content">
            <span id="name"> @${name} </span>
            <span id="description"> ${description} </span>
            <div id="otherAct"> 
                <div class="Acts" id="comment" >
                    <img class="actLogo" src="https://img.icons8.com/?size=100&id=143&format=png&color=000000" alt="">
                    <span class="actTxt"> ${cmCnt}${cmk >= 1 ? "k" : ""} </span>
                </div>
                <div class="Acts" id="share" >
                    <img class="actLogo" src="https://img.icons8.com/?size=100&id=43859&format=png&color=000000" alt="">
                    <span class="actTxt">  ${rpCnt}${rpk >= 1 ? "k" : ""} </span>
                </div>
                <div class="Acts" id="like" >
                    <img class="actLogo" src="https://img.icons8.com/?size=100&id=87&format=png&color=000000" alt="">
                    <span class="actTxt">  ${lkCnt}${lk >= 1 ? "k" : ""} </span>
                </div>
            </div>
        </div>
    `
    container.innerHTML = html;
    parentElm.appendChild(container);
    return;
}


const parent = document.getElementById('parent');

pofileComponent(
    "moshhamedani",
    "I'd love to teach you HTML/CSS!",
    "profile1.jpg",
    2253,
    5,
    20,
    parent
);

pofileComponent(
    "JohnDoe",
    "This is a default image",
    "",
    2,
    500,
    200,
    parent
);
pofileComponent(
    "JohnDoe",
    "This is a default image",
    "",
    2,
    500,
    200,
    parent
);
pofileComponent(
    "JohnDoe",
    "This is a default image",
    "",
    2,
    5000,
    200,
    parent
);
