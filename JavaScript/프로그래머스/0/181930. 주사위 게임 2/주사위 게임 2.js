function solution(a, b, c) {
    if(a!=b&&b!=c&&c!=a){
        return a + b + c;
    }
    else if((a==b && a!=c)||(b==c && c!=a)||(c==a && a!=b)){
        return (a + b + c) * (a*a + b*b + c*c);
    }
    else{
        return (a+b+c)*(a*a+b*b+c*c)*(a*a*a+b*b*b+c*c*c);
    }
}