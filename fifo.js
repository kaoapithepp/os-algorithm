function pageFaults(pages, n, capacity) {
    const s = new Set();
    let indexes = [];
    let page_faults = 0;

    for(let i = 0; i < n ; i++){
        if(s.size < capacity){
            if(!s.has(pages[i])){
                s.add(pages[i]);
                page_faults += 1;
                indexes.push(pages[i]);
            }
        } else {
            if(!s.has(pages[i])){
                let val = indexes[0]; // peek
                indexes.shift(); // poll
                s.delete(val);
                s.add(pages[i]);
                indexes.push(pages[i]);

                page_faults += 1;
            }
        }
    }

    return page_faults;
}


try {
    // const pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
    const pages = [
        7, 1, 8, 1, 6, 8, 4, 5, 3, 7, 5, 7,
        5, 6, 5, 1, 8, 1, 6, 0, 4, 4, 2, 6,
        2, 6, 5, 5, 0, 0, 2, 7, 7, 8, 7, 8,
        3, 5, 8, 6, 1, 5, 0, 0, 0, 5, 1, 4,
        6, 6, 0, 0, 3, 5, 2, 3, 3, 1, 4, 2,
        1, 1, 1, 7, 5, 0, 4, 5, 6, 5, 2, 3,
        4, 8, 4, 0, 7, 7, 4, 1, 7, 5, 6, 6,
        0, 7, 0, 8, 3, 2, 6, 2, 4, 7, 8, 7,
        0, 2, 1, 3
      ];
    const capacity = 1;
    console.log(`capacity : ${capacity} \nPF : ${pageFaults(pages, pages.length, capacity)}`);
} catch(err) {
    console.log(err)
}