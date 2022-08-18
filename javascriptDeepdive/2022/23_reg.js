(function() {
  /**
   * pattern: 정규 표현식 패턴
   * flags: 정규 표현식의 플래그(g, i, m, u, y)
   */

  const target = 'Is this all there is?';
  const regExp = /is/ig;
  regExp.test(target);
}());