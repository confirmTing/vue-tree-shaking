export function add(a, b) {
  const res = Math.random() + a + Math.random() + b;
  console.log('add');
  console.log(res);
  return res;
}

export function sub(a, b) {
  const res = Math.random() + a - Math.random() + b;
  console.log('sub');
  console.log(res);
  return res;
}
