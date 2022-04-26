import _ from 'lodash';

let res = _.groupBy([6.1, 4.2, 6.3], Math.floor);

console.log(res);
console.log(_.join(['a', 'b', 'c'], '~'));
