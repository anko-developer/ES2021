(function() {
  'use strict';

  // let str = '';

  /**
   * Quiz.01
   * *
   * **
   * ***
   * ****
   * *****
   * ****
   * ***
   * **
   * *
   */

  // for(let i = 1; i <= 10; i++) {
  //   // console.log(str.repeat(i));
  //   str += '*';
  //   if (i % 2 === 0) {
  //     continue;
  //   } else {
  //     console.log(str);
  //   }
    
  // }

  // for(let i = 10; i >= 1; i--) {
  //   // console.log(str.repeat(i));
  //   if (i % 2 === 0) {
  //     continue;
  //   } else {
  //     console.log(str.substring(0, i));
  //   }
  // }

  /**
   * Quiz.02
   * *****
   *  ****
   *   ***
   *    **
   *     *
   */
  
  // for (let i = 4; i >= 0; i--) {
  //   for (let ii = 1; ii <= 5; ii++) {
  //     if (i + ii === 5) {
  //       console.log(' '.repeat(i) + '*'.repeat(ii));
  //     }
  //   }
  // }

  /**
   * Quiz.03
   * 배열에서 '라' 문자열을 모두 없애시오.
   */

  // const arr = ['가', '라', '나', '라', '다', '라'];

  // while (arr.join('').indexOf('라') > -1) {
  //   const i = arr.join('').indexOf('라');
  //   arr.splice(i, 1);

  //   console.log(arr);
  // }
  const multily = (x,y,z) => {
    return console.log((x * y) * z);
  }

  multily(1,2,3);
}());