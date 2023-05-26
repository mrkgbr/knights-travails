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

// function node(pos, positions) {
//   return {
//     position: pos,
//     step1: positions[0],
//     step2: positions[1],
//     step3: positions[2],
//     step4: positions[3],
//     step5: positions[4],
//     step6: positions[5],
//     step7: positions[6],
//     step8: positions[7],
//   };
// }

function node(pos) {
  return {
    position: pos,
    step1: null,
    step2: null,
    step3: null,
    step4: null,
    step5: null,
    step6: null,
    step7: null,
    step8: null,
  };
}

function tree(current, find, counter = 0) {
  if (current == null) {
    return;
  }
  counter++;
  if (JSON.stringify(current) === JSON.stringify(find)) {
    console.log("found it");
    return;
  }
  let positions = [];
  for (let i = 0; i < 8; i++) {
    const firstCoord = current[0] + knightMoves[i][0];
    const secondCoord = current[1] + knightMoves[i][1];
    if (
      firstCoord <= 8 &&
      firstCoord >= 1 &&
      secondCoord <= 8 &&
      secondCoord >= 1
    ) {
      positions.push([firstCoord, secondCoord]);
    } else {
      positions.push(null);
    }
  }
  const newNode = node(current);
  newNode.step1 = tree(positions[0], find, counter);
  // newNode.step2 = tree(positions[1], find, counter);
  // newNode.step3 = tree(positions[2], find, counter);
  // newNode.step4 = tree(positions[3], find, counter);
  // newNode.step5 = tree(positions[4], find, counter);
  // newNode.step6 = tree(positions[5], find, counter);
  // newNode.step7 = tree(positions[6], find, counter);
  // newNode.step8 = tree(positions[7], find, counter);
}

let myTree = tree([4, 4], [5, 6]);
console.log(myTree);
