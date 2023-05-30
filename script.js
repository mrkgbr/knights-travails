const knightMoves = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

function minSteps(start, end) {
  let queue = [];
  let startObj = {
    data: start,
    prev: null,
  };
  queue.push(startObj);
  while (queue) {
    if (JSON.stringify(queue[0].data) === JSON.stringify(end)) return queue[0];
    knightMoves.forEach((step) => {
      let newStep = [queue[0].data[0] + step[0], queue[0].data[1] + step[1]];
      if (
        newStep[0] >= 0 &&
        newStep[1] >= 0 &&
        newStep[0] <= 8 &&
        newStep[1] <= 8
      ) {
        let newObj = {
          data: newStep,
          prev: queue[0],
        };
        queue.push(newObj);
      }
    });
    queue.shift();
  }
}

function logSteps(obj, stepCount = 0) {
  if (obj == null) {
    console.log("Minimum steps: " + stepCount);
    console.log("Steps:");
    return;
  }
  logSteps(obj.prev, stepCount + 1);
  console.log(obj.data);
}

let shortest = minSteps([1, 1], [8, 8]);
logSteps(shortest);
