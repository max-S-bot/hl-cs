/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */
//python -m http.server

function firstLast6(arr) {
    return arr[arr.length-1]==6 || arr[0]==6;
}

function has23(arr) {
    return arr.includes(3) || arr.includes(2);
}

function fix23(arr) {
    if((arr[0]==2&&arr[1]==3)) {
        arr[1]=0;
    }
    if((arr[1]==2&&arr[2]==3)) {
        arr[2]=0;
    }
    return arr;
}

function countYZ(str) {
    str=str.toLowerCase();
    let count=0;
    for (let i=0; i<str.length; i++) {
        if((str[i]=="z"||str[i]=="y")&&(i+1==str.length||str[i+1]==" ")){
            count++;
        }
    }
    return count;
}

function endOther(str1,str2) {
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    if (str1.length>str2.length){
        return str2==str1.slice(str1.length-str2.length);
    } else {
        return str1==str2.slice(str2.length-str1.length);
    }
}

function starOut(str) {
let final="";
for (let i=0; i<str.length; i++){
    if(str[i+1]!="*"&&str[i]!="*"&&str[i-1]!="*") {
        final+=str[i];
    }
}
return final;
}

function getSandwich (str) {
    let index=str.indexOf("bread");
    if (index==-1) {
        return "";
    } else {
        let i=str.slice(index+5).indexOf("bread");
        while((str.slice(i,i+5)!="bread"||str.slice(i+5).includes("bread"))) {
            i++
        }
        console.log(i)
        if (i==-1) {
            return "";
        } else {
            return str.slice(index+5,i);
        }
    }
}

function canBalance(arr) {
    for (let i=0; i<arr.length; i++) {
        let s1=0;
        for (let j=0; j<i; j++) {
            s1+=arr[j];
        }
        let s2=0;
        for (let k=i; k<arr.length; k++) {
            s2+=arr[k]
        }
        if (s1==s2) {return true}
    }
    return false;
}

function countClumps (arr) {
    let count=0
    for (let i=0; i<arr.length; i++) {
        let s=0;
        while(arr[i]==arr[i+1]) {
            if(s==0){count++}
            s++
            arr.splice(i+1,1)
        }
    }
    return count
}

function sameEnds(str) {
    let final="";
    for (let i=0; i<=(str.length+str.length%2)/2; i++) {
        if(str.length-i<i) {break;}
        if(str.slice(0,i)==str.slice(str.length-i,str.length)){
            final=str.slice(0,i);
        }
    }
    return final
}

/*







*/

function all_even(arr) {
    return arr.filter((num)=>{return num%2==0;});
}

function no_space(arr) {
    return arr.filter((str)=>{return !str.includes(" ");})
}

function all_positive(arr) {
    return arr.filter((s)=>{return s.length==all_even(s).length;});
}

function same_vowels(arr) {
    return arr.filter((str)=>{
        let obj={};
        for(let i=0; i<str.length; i++) {
            let c=str[i];
            if (c=="a"||c=="e"||c=="i"||c=="o"||c=="u") {
                obj[str[i]]=1;
            }
        }
        return Object.keys(obj).length==1;
    });
}


function times_ten (arr) {
    return arr.map(    
        (num) => { return num*10; }
    );
}

function types (arr) {
    return arr.map((elem)=>{return typeof elem;});
}

function no_vowels(arr) {
    return arr.map((str)=>{
        let final="";
        for(let i=0; i<str.length; i++) {
            let c=str[i]
            if (c=="a"||c=="e"||c=="i"||c=="o"||c=="u") {
                final+=str[i];
            }
        }
        return final;
    });
}

function double_matrix(arr2d) {
    return arr2d.map((arr)=>{
        return arr.map((n)=>{return 2*n});
    });
}

function sum_nums(arr) {
    return arr.reduce((s,n)=>{return s+n;});
}

function product_matrix(arr2d) {
    return arr2d.reduce((c,arr)=>{
        return c*arr.reduce((p,n)=>{return p*n;});
    },
    1);
}

function average(arr) {
    return sum_nums(arr)/arr.length;
}

function lucky_numbers(arr) {
    return arr.reduce((str,num)=>{
        if(arr.indexOf(num)==arr.length-1) {
            return str+"and "+num;
        } else {return str+num+", ";}
    },
    "Your lucky numbers are: ");
}

function shift_right(arr) {
    return arr.reduce((c,elem)=>{
        if (arr.indexOf(elem)!=arr.length-1) {
            return c.concat(elem);
        } else {return c;}
    },
    [arr[arr.length-1]]);
}

/*


*/

function  countEvens(arr) {
    return arr.reduce((a,e)=>a+(e+1)%2,0);
}


function no14(arr) {
    const r = arr.reduce((a,e)=>{
        if(e===1){a[0]=false;}
        if(e===4){a[1]=false;}
        return a;
    },[true,true]);
    return r[0]||r[1];
}

function either24(arr) {
    const n = arr.length;
    let bool2 = false;
    let bool4 = false;
    for (let i=1; i<n; i++) {
        if (arr[i]==2&&arr[i]==arr[i-1]) {
            bool2 = true;
        } 
        if (arr[i]==4&&arr[i]==arr[i-1]) {
            bool4 = true;
        }
    }
    return Boolean(bool2^bool4);
}

function makeChocolate(s, b, g) {
    let numB = (g-g%5)/5;
    while(numB>b) {numB--}
    const rem = g-5*numB;
    return rem>s?-1:rem;
}

function luckySum(a,b,c) {
    if (a==13){return 0;}
    if (b==13){return a;}
    if (c==13){return a+b;}
    return a+b+c;
}


function maxBlock(str) {
    const n = str.length;
    let max = 0;
    let curChar = str[0];
    let curCount = 1;
    for (let i=1; i<n; i++) {
        if (curChar==str[i]) {
            curCount++
        } else {
            curCount=1;
            curChar=str[i];
        }
        max = max>curCount?max:curCount;
    }
    return max;
}

function linearIn(arr1,arr2) {
    return arr2.reduce((a,c)=>(a&&arr1.includes(c)),true);
}

function countTriple(str) {
    const n = str.length;
    let trips = 0;
    for (let i=2; i<n; i++) {
        if (str[i]==str[i-1]&&str[i]==str[i-2]) {
            trips++;
        }
    }
    return trips;
}

function countHi(str) {
    if(str.length<=1) {return 0;}
    if (str[0]=="h"&&str[1]=="i") {
        return 1+countHi(str.substring(2))
    } else {
        return countHi(str.substring(1))
    }
}

function fibonacci(n) {
    if (n==0||n==1) {
        return n;
    } else {
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

function triangle(n) {
    if (n===0) {
        return 0;
    } else {
        return n+triangle(n-1);
    }
}

function reverseString(str) {
    if (str.length==1||str.length==0){
        return str;
    } else {
        return str[str.length-1]+reverseString(str.substring(1,str.length-1))+str[0];
    }
}

function sumDigits(x) {
    let y=x.toString();
    let sum=0
    for (let i=0; i<y.length; i++) {
        sum+=Number(y[i]);
    }
    return sum;
}

function Hpalindrome() {
    if(str.length==1||str.length==0){return true}
    if (str[0]==str[str.length-1]){return palindrome(str.substring(1,str.length-1))}
    return false;
}

function palindrome(str) {
    return str==reverseString(str);
}

function binarySearch(arr,val) {
    let num=(arr.length-arr.length%2)/2;
    if(arr.length==0){return -1}
    if (arr[num]===val){return num} 
    if (arr[num]<val){
        let bSearch = binarySearch(arr.splice(num+1,arr.length-num-1),val)
        return bSearch===-1?-1:num+1+bSearch;
    } else {
        return binarySearch(arr.splice(0,num),val);
    }
}



function pTri(n) {
    if(n==1){return [[1]]}
    let res=pTri(n-1);
    res.push(pRow(res));
    return res;
}

// takes in first n-1 rows of pascal's triangle
//and outputs the next row
function pRow(r) {
    var n=r.length-1;
    let row = [1];
    for (let i=0; i<n; i++) {
        row.push(r[n][i]+r[n][i+1]);
    }
    row.push(1);
    return row;
}


function perm(str){
    let arr=[];
    let l = str.length;
    if(l==1){ return [str] }
    for (let i=0; i<l; i++) {
        let tStr="";
        for (let k=0; k<l; k++){if(k!=i){tStr+=str[k]}}
        let temp=perm(tStr);
        for (let j=0; j<temp.length; j++){
            arr.push(str[i]+temp[j])
        }
    }
    return arr;
}

function arrPerm(arr){
    let final=[];
    let l = arr.length;
    if(l==1){ 
        return [[].concat(arr)]; 
    }
    for (let i=0; i<l; i++) {
        let tArr=[].concat(arr);
        tArr.splice(i,1);
        let temp=arrPerm(tArr);
        for (let j=0; j<temp.length; j++){
            temp[j].push(arr[i])
            final.push(temp[j])
        }
    }
    return final;
}


function subSets(arr) {
    if (arr.length==0) {return [[]]}
    let sets=[arr];
    let tArr=[].concat(arr);
    for (let i=0; i<arr.length; i++) {
        tArr.splice(i,1);
        sets=sets.concat(subSets(tArr));
        tArr=[];
        for(let j=0; j<arr.length; j++) {
            tArr.push(arr[j]);
        }
    }
    return removeRedundancy(sets);
}

function removeRedundancy(arr) {
    let nArr=[];
    for (let i=0; i<arr.length; i++) {
        let bool=true;
        for (let j=0; j<nArr.length; j++) {
            if (equal(nArr[j],arr[i])) {bool=false}
        }
        if(bool) {nArr.push(arr[i])}
    }
    return nArr;
}

//checks whether two arrays are equal
function equal(a,b) {
    if (a.length!=b.length) {return false}
    for (let i=0; i<a.length; i++) {
        if (a[i]!=b[i]) {return false}
    }
    return true;
}