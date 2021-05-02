/**
 * @param {number[][]} courses
 * @return {number}
 */
 var scheduleCourse = function (courses) {
    if (!courses.length) return 0;
    // think it backwards, course with the last end date shall be taken last so we sort with bigger d first
    courses.sort(([t1, d1], [t2, d2]) => d2 - d1);
    // keep note of date and course count, index=count,value = empty before day
    let arr = new Array(courses.length + 1).fill(-1);
    arr[0] = Number.MAX_SAFE_INTEGER, maxCount = 0;
    // loop course
    for (let [t, d] of courses) {
      for (let i = maxCount + 1; i > 0; i--) {
        arr[i] = Math.max(arr[i], Math.min(arr[i - 1], d) - t);
        if (arr[i] > -1 && i > maxCount) maxCount = i;
      }
    }
    return maxCount
  };

console.log(scheduleCourse([[100,200],[200,1300],[1000,1250],[2000,3200]]));