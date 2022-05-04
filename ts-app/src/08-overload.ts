// Miguel => [M, i, g, u, e, l] => string => string[]
// [M, i, g, u, e, l] => Miguel => string[] => string


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Miguel');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Miguel =>' ,rtaArray);

const rtaStr = parseStr(['M', 'i', 'g', 'u', 'e', 'l']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['M', 'i', 'g', 'u', 'e', 'l'] =>",rtaStr);
