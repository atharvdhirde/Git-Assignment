
function fibo(number){
    let n1 = 1, n2 = 1, nextTerm;


    document.write("Fibonacci Series till nth term: ");

    for (let i = 1; i <= number; i++) {
        document.write(n1,"<br>");
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
};
fibo(100)
