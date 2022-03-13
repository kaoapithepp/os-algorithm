function pageFaults(pages, n, capacity) {
    let slot = [];
    let page_faults = 0;

    for(let i of pages){
        if(!slot.includes(i)){
            if(slot.length == capacity){
                slot.shift();
                slot.push(i);
            } else {
                slot.push(i);
            }

            page_faults += 1;
        } else {
            slot.splice(slot.indexOf(i), 1);
            slot.push(i);
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
    const capacity = 6;
    console.log(`capacity : ${capacity} \nPF : ${pageFaults(pages, pages.length, capacity)}`);
} catch(err) {
    console.log(err)
}