function nestObjKey(obj){
    return Object.keys(obj).reduce((acc, key)=>{
        return typeof obj[key] === 'object' ? nestObjKey(obj[key]): (acc[key] = obj[key], acc) 
    },{})
}
var obj = {a:{b:{c:{d:{e:1}}}}}
nestObjKey(obj)


//output :: {e:1}
