var num = 1;
if (num === 1) {
  console.log('num is equal to 1');
}

num = 0;
if (num === 1) {
  console.log('num is equal to 1');
} else {
  console.log('num is not equal to 1');
}

if (num === 1){
    num++;
}
else{
    num--;
}

var month = 5;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    default:
        console.log('Month is not January, February, March, April or May');
        break;
}
