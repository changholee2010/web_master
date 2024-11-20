// forExe1.js

// 3 * 1 = 3
// 3 * 2 = 6
// ...
// 3 * 9 = 27
// <table border="2">
// <tr style="background: pink"><td>3 * 1</td><td>=</td><td>3</td></tr>
// <tr style="background: cyon"><td>3 * 2</td><td>=</td><td>6</td></tr>
// ......
// <tr ><td>3 * 8</td><td>=</td><td>24</td></tr>
// <tr><td>3 * 9</td><td>=</td><td>27</td></tr>
// </table>

document.write('<table border="2" style="">');
for (let j = 2; j <= 9; j++) {
  const num = j; // 2, 3, 4, 5 ... 9
  for (let i = 1; i <= 9; i++) {
    if (i % 2 == 1) { // 홀수.
      document.write('<tr style="background: pink; color: white;"><td>' + num + ' * ' + i + '</td><td> = </td><td>' + num * i + '</td></tr>');
    } else { // 짝수.
      document.write(`<tr style="background: cyan;"><td> ${num} * ${i} </td><td> = </td><td> ${num * i} </td></tr>`);
    }
  } // end of for(let i=1...)
}

document.write('</table>');