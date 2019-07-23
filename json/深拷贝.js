//深拷贝

// function deepClone(obj){
//     let obj_clone = Array.isArray(obj) ? [] : {}
//     if(obj && typeof(obj) == 'object')
//     {
//         for(key in obj){
//             if(obj[key] && typeof(obj[key]) == 'object'){
//                 obj_clone[key] = deepClone(obj[key]);
//             }else{
//                 obj_clone[key] = obj[key]; 
//             }
//         }
//     }else{
//         obj_clone = obj
//     }
//     return obj_clone;
// }

function deepClone(obj){
    var wrap
    if(obj.constructor == Array){
        /*判断引用数据类型是对象还是数组
            1.var.constructor == Array/Object
            2.Array.isArray(var)   Object.isObject(var)
            3.var instanceof Array/Object  => arr instanceof Object is true!
        */
        wrap = []
    }else if(obj.constructor == Object){
        wrap = {}
    }else{
        alert('错误调用，请输入引用数据类型变量！');
        return;
    }
    if(obj && typeof(obj) == 'object'){
        for(key in obj){
            if(obj[key] && typeof(obj[key]) == "object"){
                // console.log(obj[key])
                wrap[key] = deepClone(obj[key])
                // console.log(wrap[key])
            }else{
                wrap[key] = obj[key]
            }
        }
    }
    return wrap;
}


// var arr1 =[2,5,8];
// arr2=deepClone(arr1);
// arr1.push(99);
// console.log('new arr1:',arr1)
// console.log('arr2:',arr2)

var obj1 ={
    name:'Tony',
    height:170,
}
obj1.score =[]
var obj2=deepClone(obj1)
obj1.height= 180;
console.log('new obj1:',obj1)
console.log(obj2)


// var arr3=[]
// arr4 =deepClone(arr3)
// console.log(arr4)

