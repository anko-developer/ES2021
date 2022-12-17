(function() {
  function parseURL(url = '') {
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parsedURL);

    if (!parsedURL) return {};

    const [, protocol, host, path] = parsedURL;
    return { protocol, host, path };
  }

  const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript');
  console.log(parsedURL);

  const str = 'Hello';
  const { length } = str;
  console.log(length);

  function printTodo({ content, completed }) {
    console.log(`할일 ${content}은 ${completed ? '완료' : '미완료'}입니다!`);
  }

  printTodo({ content: 'JavaScript', completed: false });
}());