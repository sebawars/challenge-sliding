function slidingWindow(text="abccfh", differentValuesSize=2){

    let finalCounter = 0;
    let differentRecords;
    const stringSize = text.length

    for (let index = 0; index < stringSize; index++) {
        const element = text[index];
        differentRecords = new Set();
        differentRecords.add(element);

        for (let index2 = 0; index2 < differentValuesSize && (index + index2) < stringSize ; index2++) {
            const element2 = text[index + index2];
            differentRecords.add(element2);
        }

        if(differentRecords.size === differentValuesSize){
            finalCounter++;
        }

    }

    console.log(finalCounter);
}

slidingWindow()