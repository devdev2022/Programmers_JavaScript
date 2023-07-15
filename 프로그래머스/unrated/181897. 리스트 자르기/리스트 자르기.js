function solution(n, slicer, num_list) {
    let checkout = {
       1: function() {
           return num_list.slice(0, slicer[1] + 1);
       },
       2: function() {
           return num_list.slice(slicer[0], num_list.length + 1);
       },
       3: function() {
           return num_list.slice(slicer[0], slicer[1] + 1);
       },
       4: function() {
           let arr = [];
           let i = slicer[0];
           while (i <= slicer[1]) {
               arr.push(num_list[i]);
               i += slicer[2];
           }
           return arr;
       }
    };
    return checkout[n]()
}