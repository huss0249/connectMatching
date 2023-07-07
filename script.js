const getClassElements = (flag) => {
  let list = document.querySelectorAll('[class*="' + flag + '"]');
  // console.log(Array.from(list));
  let bbb = Array.from(list);
  // return Array.from(list);
  return bbb;
};

//-------------------------------------------------------------------

const getMatchingElements = (a, b, c) => {
  let matchingElements = [];

  let pair = {
    main: null,
    ref: null
  };

  c.forEach((elC, i, c) => {
    let arrC = Array.from(elC.classList);

    if (elC.classList.contains(main)) {
      if (!pair.main) {
        pair.main = elC.textContent;
      }
    }

    if (elC.classList.contains(ref)) {
      if (!pair.ref && pair.main) {
        pair.ref = elC.textContent;
      }
    }

    if (pair.main && pair.ref) {
      console.log("before push ", pair);
      let jj = { ...pair };
      console.log("jj = ", jj);

      // matchingElements.push(pair);
      matchingElements.push(jj);
    }
    pair.main = null;
    pair.ref = null;
  });

  console.log(matchingElements);
  // return matchingElements;
  return ConnectMatching(matchingElements);
};

//-------------------------------------------------------------------
const ConnectMatching = (arr) => {
  console.log("pairs = ", arr);
  arr.forEach((el) => {
    console.log(el.main, el.ref);
  });
  // return console.log("done ", pairs);
  return;
};
//-------------------------------------------------------------------

//-------------------------------------------------------------------
let main = "has_caption";
let ref = "caption";
let trgt_filter = "caption_";

const $a = getClassElements(main);
const $b = getClassElements(ref);
const $c = getClassElements(trgt_filter);

const matchingElements = getMatchingElements($a, $b, $c);
