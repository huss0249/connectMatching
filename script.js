const log = console.log
const getClassElements = (flag) => {
  let list = document.querySelectorAll('[class*="' + flag + '"]');
  // log(list);
  // log(Array.from(list));
  // let bbb = Array.from(list);
  return Array.from(list);
  // return bbb;
  // return list;
};

//-------------------------------------------------------------------

const getMatchingElements = (a, b, c) => {
  let matchingElements = [];

  let pair = {
    main: null,
    ref: null
  };

  $trgt_filter.forEach((elC) => {
    let arrC = Array.from(elC.classList);
    log(arrC)

    if (elC.classList.contains(main)) {
      if (!pair.main) {
        pair.main = elC.textContent;
      }
    }

    // if (elC.classList.contains(ref)) {
    //   if (!pair.ref && pair.main) {
    //     pair.ref = elC.textContent;
    //   }
    // }

    // if (pair.main && pair.ref) {
    //   console.log("before push ", pair);
    //   let jj = { ...pair };
    //   log("jj = ", jj);

    //   // matchingElements.push(pair);
    //   matchingElements.push(jj);
    // }
    // pair.main = null;
    // pair.ref = null;
  });

  log(matchingElements);
  // return matchingElements;
  return ConnectMatching(matchingElements);
};

//-------------------------------------------------------------------
const ConnectMatching = (arr) => {
  log("pairs = ", arr);
  arr.forEach((el) => {
    log(el.main, el.ref);
  });
  // return log("done ", pairs);
  return;
};
//-------------------------------------------------------------------

//-------------------------------------------------------------------
let main = "has_caption";
let ref = "caption";
let trgt_filter = "caption_";

// const $a = getClassElements(main);
// const $b = getClassElements(ref);
const $trgt_filter = getClassElements(trgt_filter);
// log($trgt_filter)
const matchingElements = getMatchingElements($trgt_filter, main, ref);
