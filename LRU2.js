function pageFaults(pages, n, capacity){
        let s = new Set();
        let indexes = new Map();
        let page_faults = 0;

        for (let i=0; i<n; i++){
            if (s.size < capacity){
                if (!s.has(pages[i])){
                    s.add(pages[i]);
                    page_faults += 1;
                }

                indexes.set(pages[i], i);

            } else {
                if (!s.has(pages[i])){
                    let lru = Number.MAX_VALUE;
                    let val = Number.MIN_VALUE;

                    for(let itr of s.values()){
                        let temp = itr;
                        if (indexes[temp] < lru){
                            lru = indexes[temp];
                            val = temp;
                        }
                    }

                    s.delete(val);
                    indexes.delete(val);
                    s.add(pages[i]);
        
                    page_faults += 1;
                }
                indexes.set(pages[i], i);
            }
        }
        
        return page_faults;
}

try {
    // const pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
    const pages = [0,0,0,0,1,2,3,4,7,9,6,5,1,3,4,8,0,5,4,0,1,3,2,2,5,0,1,8,7,5];
    // const pages = [
    //     8, 1, 7, 3, 7, 7, 4, 8, 5,
    //     4, 8, 7, 3, 7, 4, 8, 6, 4,
    //     6, 4, 7, 5, 4, 0, 3, 8, 0,
    //     1, 7, 1
    //   ];
    const capacity = 1;
    console.log(`capacity : ${capacity} \nPF : ${pageFaults(pages, pages.length, capacity)}`);
} catch(err) {
    console.log(err)
}