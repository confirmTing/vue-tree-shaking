
function sub(a, b) {
  const res = Math.random() + a - Math.random() + b;
  console.log('sub');
  console.log(res);
  return res;
}

// export default sub;

export {sub};
