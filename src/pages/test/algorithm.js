function bubbleSort(arr) {
  arr = arr.slice();

  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log('bubbleSort:' + arr);
}

var arr = [3, 4, 5, 2, 1, 11, 22, 444, 666, 34, 0, -1, -1, 2, 3];
console.log('arr:' + arr);
bubbleSort(arr);

function quickSort(arr) {
  arr = arr.slice();

  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    //寻找每轮的最小值
    for (var j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    //把最小值进行交换
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  console.log('quickSort:' + arr);
}

quickSort(arr);

function insertSort(arr) {
  arr = arr.slice();

  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    //前一个坐标
    preIndex = i - 1;
    //当前位置的值
    current = arr[i];
    //如果当前一个大于当前，则交换，直到遍历完成 或者 等于小于 前一个
    //往前找，找到比自己小的就替换，没有的话，就插过去
    while (preIndex >= 0 && arr[preIndex] > current) {
      //这一个 替换 为 前一个
      arr[preIndex + 1] = arr[preIndex];
      //一直往前
      preIndex--;
    }
    //3,4,5,2
    //3,4,5,5
    //3,4,4,5
    //3,3,4,5 while 结束 preIndex = -1
    //2,3,4,5 arr[0] = current = 2

    //找到了合适的位置，就插过去
    arr[preIndex + 1] = current;
  }

  console.log('insertSort:' + arr);
}

insertSort(arr);

