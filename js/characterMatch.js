exports.isCharacterMatch = function(str1, str2) {
    
    str1 = str1.replace(/\s+/g, '').toLowerCase().split('')
    str2 = str2.replace(/\s+/g, '').toLowerCase().split('')
    let rerun;

    do{
        rerun = false
        for(let i = 0; i<str1.length; i++){
            for(let j = 0; j<str2.length; j++){
               
                if(str1[i]===str2[j] ){
                    
                    str1.splice(i,1)
                    str2.splice(j,1)
                    
                    i = 0
                    j = 0
                    rerun = true
                }
            }
        }
    } while(rerun)
   
    if(str1.length === 0 && str2.length === 0)
        return true
    return false
}
    


//console.log(isCharacterMatch('abcde2', 'c2abed'))