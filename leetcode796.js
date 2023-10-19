/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let arrSTr=s.split("")
    for(let i=0;i<s.length;i++){
        let temp=arrSTr.shift()
        arrSTr.push(temp)
        if(arrSTr.join("")==goal){
            return true
        }

    }
    return false
};