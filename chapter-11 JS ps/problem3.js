const wait = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${n} seconds`);
    }, n * 1000);
  });
};

(async () => {
  let res1 = await wait(1);
  console.log(res1);
  let res2 = await wait(2);
  console.log(res2);
  let res3 = await wait(3);
  console.log(res3);
})();