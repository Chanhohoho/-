// 함수를 선언 할 때 함수의 앞부분에 async 키워드를 붙여주세요.
// 그리고 Promise 의 앞부분에 await 을 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행 할 수 있습니다.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

// async 함수에서 에러를 발생 시킬때에는 throw 를 사용하고, 에러를 잡아낼 때에는 try/catch 문을 사용합니다.

process();