// to rest
(function() {
  function delayP(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

  async function a() {
    const a = await 1; // await -> then
    console.log('a', a);
    console.log('음');

    await null;
    const b = await Promise.resolve(1);
    console.log('b', b);
  }
})();