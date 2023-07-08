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

// const getMatchingElements = (a, b, c) => {
const getMatchingElements = (a, b, c, d) => {
  let matchingElements = [];

  let pair = {
    main: null,
    ref: null
  };

  $trgt_filter.forEach((elC) => {
    let arrC = Array.from(elC.classList);
    log('')
    // log('arrC = ', arrC)

    // let yy = elC.className.split(trgt_filter)[1]
    // let zz = elC.className.split(trgt_filter)

    // let qq = elC.className
    // let yy = elC.className.split(trgt_filter)[1]
    // let zz = elC.className.split(trgt_filter)
    
    // log(parseInt(yy))
    // log('qq = ', qq)
    // log('yy = ', yy)
    // log('zz = ', zz)

    // let tt = arrC.indexOf(main)
    // log('tt = ', tt)

    let $target = ''
    let $match = ''
    arrC.forEach((w) => {

      if (w.startsWith(trgt_filter) && elC.classList.contains(ref)) {
        // $target = parseInt(w.substr(trgt_filter.length, 2))
        $target = w.substr(trgt_filter.length, 2)
        
        // log('Target ', w.substr(trgt_filter.length, 2))
        log('Target ', $target)

        // if (arrC.includes(main)) {
          // let uuu = `${trgt_filter}${$target}`
          let uuu = `${d}${$target}`
          log('uuu = ', uuu)

        //   $match = $trgt_filter.map((ee) => {
        //     ee.classList.contains(ref)
        //   })
        //   log('$match =', $match)

        // }

        // let $src = $trgt_filter.find(t => t.classList.contains(uuu) && t.classList.contains(main));
        let $src = a.find(t => t.classList.contains(uuu) && t.classList.contains(b));
        log('src = ', $src)
        
        // $match = $trgt_filter.find(t=>t.classList.contains(uuu) && t.classList.contains(ref));
        $match = a.find(t=>t.classList.contains(uuu) && t.classList.contains(c));
        console.log($match);

        matchingElements.push({$src, $match});
      }


      // log(w.split(trgt_filter)[1] != undefined)
      // if (w === main) {
      if (w === b) {
        // log('open obj', w, elC)
      }

      // if (w.split(trgt_filter)[1] != undefined) {
      if (w.split(d)[1] != undefined) {
        // let uu = parseInt(w.split(trgt_filter)[1])
        let uu = parseInt(w.split(d)[1])
        // log('save ix ', uu)
        // log(parseInt(w.split(trgt_filter)[1]))       
      }
      
    
    })
    // if (elC.classList.contains(main)) {
      // if (!pair.main) {
      //   pair.main = elC.textContent;
      // }
    // }

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
    log(el.$src, el.$match);
    // log(el.$src.textContent = el.$match.textContent);
    log(el.$src.innerHTML = el.$match.innerHTML);
    el.$match.remove()
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
// const matchingElements = getMatchingElements($trgt_filter, main, ref);
const matchingElements = getMatchingElements($trgt_filter, main, ref, trgt_filter);
