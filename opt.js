function pageFaults(pages, n, capacity){
    let buffer = new Array(capacity);
    let ref = new Array(pages.length);
    let mem_layout = new Array(pages.length);
    let slotsFull = false;
    let pointer = 0;
    let page_faults = 0;

    for(let i = 0 ; i < mem_layout.length ; i ++){
        mem_layout[i] = new Array(capacity);
    }

    // console.log(`mem_layout: ${mem_layout}`);

    for(let i = 0 ; i < capacity ; i++){
        buffer[i] = -1;
    }

    // console.log(`buffer: ${buffer}`);

    for(let i = 0; i < pages.length ; i++){
        ref[i] = pages[i];
    }

    // console.log(`ref: ${ref}`);

    for(let i = 0; i < pages.length ; i++){
        let search = -1;
        for(let j = 0; j < capacity ; j++){
            if(buffer[j] == ref[i]){
                search = j;
                break;
            }
        }
        if(search == -1){
            if(slotsFull){
                let index = new Array(capacity);
                let index_flag = new Array(capacity);
                for(let j = i + 1; j < pages.length ; j++){
                    for(let k = 0; k < capacity ; k++){
                        if(ref[j] == buffer[k] && index_flag[k] == false){
                            index[k] = j;
                            index_flag[k] = true;
                            break;
                        }
                    }
                }
                let max = index[0];
                pointer = 0;
                if(max == 0){
                    max = 200;
                }
                for(let j = 0; j < capacity ; j++){
                    if(index[j] == 0){
                        index[j] = 200;
                    }

                    if(index[j] > max){
                        max = index[j];
                        pointer = j;
                    }
                }
            }
            buffer[pointer] = ref[i];
            page_faults += 1;

            if(!slotsFull){
                pointer += 1;
                if(pointer == capacity){
                    pointer = 0;
                    slotsFull = true;
                }
            }
        }
        for(let j = 0; j < capacity ; j++){
            mem_layout[i][j] = buffer[j];
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