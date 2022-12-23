(function() {
  // NodeList, HTMLCollection은 유사 배열이면서 이터러블이기 때문에
  // 스프레드 문법으로 배열로 바꿀 수 있다.   
  // Array에 유용한 고차함수가 많기 때문에 배열로 변환해서 사용하면 좋다.
  const $li = document.querySelectorAll('.item');
  [...$li].forEach((item) => {
    console.log(item);
  });

  const testSibling = document.querySelector('.test'); // <li class="item test">테스트 버튼3</li>
  console.log(testSibling.nextElementSibling); // <li class="item">테스트 버튼4</li>  모든 형제를 찾지는 않고 next 요소 한개만 찾음

  // 요소 안의 모든 텍스트 반환(마크업은 제외)
  const $textNode = document.querySelector('#textNode');
  console.log(textNode.textContent); // 텍스트 노드를 반환해주세요.
  $textNode.insertAdjacentHTML('beforeend', '<p>끝에 위치하게 추가</p>');
  $textNode.insertAdjacentHTML('afterend', '<p>해당 요소 다음에 오게 추가</p>');

  // 추가할 텍스트에 마크없이 없는 경우에는 이렇게 텍스트를 생성하여 추가하는 것보다
  // textContent 프로퍼티가 훨씬 간편하다.
  const divBox = document.createElement('div');
  // divBox.appendChild(document.createTextNode('불라불라'));
  divBox.textContent = '불라불라';


  // 아래 예제는 3개의 요소 노드를 생성하여 DOM에 3번 추가하므로 리플로우와 리페인트가 3번 실행 됨.
  // 매우 비효율적!
  // 그렇기 때문에 컨테이너 요소를 미리 생성한 다음, 추가해야할 요소 노드를 컨테이너 요소에 자식 노드로 추가하고
  // 컨테이너 요소를 #testBox 요소에 추가한다면 DOM은 한 번만 변경되므로 효율적!
  // 컨테이너 요소(div)가 ul 안에 들어가면 바람직하지 않기 때문에
  // DocumentFragment 노드를 통해 해결가능
  const $testBox = document.querySelector('#testBox');

  // 컨테이너 요소 추가 대신 DocumentFragment 노드를 사용
  // const $container = document.createElement('div');
  const $fragment = document.createDocumentFragment();

  ['Apple', 'Banana', 'Orange'].forEach((text) => {
    // 1. 요소 노드 생성
    const $li = document.createElement('li');
    // 2. 텍스트 노드 생성
    const textNode = document.createTextNode(text);
    // 3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
    $li.appendChild(textNode);
    // 4. $li 요소 노드를 #testBox 요소 노드의 마지막 자식 노드로 추가
    // $testBox.appendChild($li);
    $fragment.appendChild($li);
  });

  // 5. 컨테이너 요소 노드를 #testBox 요소 노드의 마지막 자식 노드로 추가
  $testBox.appendChild($fragment);


  // appendChild 는 항상 요소의 끝에 위치하게 삽입된다,
  // 원하는 위치에 삽입을할 때 insertBefore 메서드를 사용.
  // 첫 번째 인수로 전달받은 노드를 두 번째 인수로 전달받은 노드 앞에 삽입한다.
  // 두 번째 인수가 insertBefore 메서드를 호출한 요소의 자식이어야한다, 그렇지 않으면 에러 발생
  // 두 번째 인수가 null 이면 appendChild 처럼 동작한다.
  const $insertBox = document.querySelector('#insertBox');
  const $insertLi = document.createElement('li');
  const [$a, $b,] = $insertBox.children; // children을 디스트럭쳐링으로 첫 번째, 두 번째 요소를 빼내고, 이미 존재하는 노드들의 순서를 appendChild, insertBefore로 바꿀 수 있다.
  $insertLi.textContent = 'test';
  // $insertBox.insertBefore($insertLi, document.querySelector('.insertTest'));
  $insertBox.appendChild($a);
  $insertBox.insertBefore($b, $insertBox.lastElementChild);
  
  // 노드 교체하기
  // 첫 번째 인수는 newChild, 두 번째 인수는 교체될 oldChild
  $insertBox.replaceChild($insertLi, document.querySelector('.insertTest'));
}());