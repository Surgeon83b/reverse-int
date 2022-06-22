module.exports = function reverse(n) {
  let res = 0;
  let nn = Math.abs(n);

  while (nn > 0) {
    res = res * 10 + nn % 10;
    nn = Math.trunc(nn / 10);
  }
  console.log(res);
  return res;
}

