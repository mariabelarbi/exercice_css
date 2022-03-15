let remove_elt=(a,b)=> {
    let j=0;
    for(let i=0;i<a.length;i++)
    if(a[i]==b) j=i;
    for(let k=j;k<a.length;k++)
    a[k]=a[k+1];
    a.length=a.length-1;

}
let a=["a","b","c","d"];
remove_elt(a,"c");
console.log(a);
// si on introduit l'index de l'element 

let remove_index=(a,b)=> {
    for(let i=b;i<a.length;i++)
    a[i]=a[i+1];
    a.length=a.length-1;

}
remove_index(a,1);
console.log(a);
// suppresion des doublons dans un tableau trié 
let remove_duplicates=(a)=>
{
    for(let i=0;i<a.length;i++)
    for(let j=i+1;j<a.length;j++)
    if (a[i]==a[j]) {for(let k=i;k<a.length;k++)
        a[k]=a[k+1];
        a.length--;
        i--;
    } 
}
let tab=[1,2,4,4,4,7,10,10,22,26,28,28,28];
remove_duplicates(tab);
console.log(tab);
let sum=0;
for(let i=0;i<=9;i++,sum+=i);
 console.log(sum);