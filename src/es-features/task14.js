﻿﻿﻿﻿/**
 * TODO: описание
 *
 * Пример вызова
 * console.log(task14Old({ a: 10, b: 55, c: 3 })); -> [["a", 10], ["b", 55], ["c", 3]]
 * console.log(task14Old({ a: 1 })); -> [["a", 1]]
 */

export function task14Old(obj) {
  return Object.keys(obj).map(k => [k, obj[k]]);
}

// Напишите реализацию функции task14Old на ESnext ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task14New() {}
