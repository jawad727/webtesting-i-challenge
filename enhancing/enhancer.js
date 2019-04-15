module.exports = {
  succeed,
  fail,
  repair,
  get,
};



function succeed(item) {
  const num = item.enhancement

  if (num < 20) {return { ...item, enhancement: num + 1}};
}


function fail(item) {
  const num = item.enhancement
  const dur = item.durability

  if (num < 15) {return { ...item, durability: dur - 5}}
  else if (num >= 15) {return { ...item, durability: dur - 10}}
  else if (num > 16) {return { ...item, enhancement: num - 1}}
}


function repair(item) {
  return { ...item, durability: 100, };
}


function get(item) {
  return { ...item };
}
