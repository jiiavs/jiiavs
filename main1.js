function multiplicationTablePretty(N) {
    for (let i = 1; i <= N; i++) {
        let row = '';
        for (let j = 1; j <= N; j++) {
            
            row += (i * j).toString().padStart(4, ' ');
        }
        console.log(row); 
    }
}

multiplicationTablePretty(3);
