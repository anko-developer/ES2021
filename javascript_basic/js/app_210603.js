(function() {
  'use strict';
  /**
   * javascript는 매니지드 언어다, 메모리의 할당 및 해제를 위한 메모리 관리 기능을 언어 차원에서 담당.
   * 더 이상 사용하지 않는 메모리의 해제는 가비지 콜렉터가 수행한다.
   */
  
  let test = '테스트111';
  // let el = `<ul>\n <li>${test}</li>\n</ul>`;
  let el = `<ul>
    <li>${test}</li>
  </ul>`; 
  console.log(el);
}());