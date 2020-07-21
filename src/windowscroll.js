
const stepTime = 20;
const docBody = document.body;
const focElem = document.documentElement;

const scrollAnimationStep = function (initPos, stepAmount) {
    const newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;

    docBody.scrollTop = focElem.scrollTop = newPos;

    newPos && setTimeout(function () {
        scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
}

const scrollTopAnimated = function (speed) {
    const topOffset = docBody.scrollTop || focElem.scrollTop;
    let stepAmount = topOffset;

    speed && (stepAmount = (topOffset * stepTime) / speed);

    scrollAnimationStep(topOffset, stepAmount);
};

module.exports = {
    scrollTopAnimated,
    scrollAnimationStep
}
