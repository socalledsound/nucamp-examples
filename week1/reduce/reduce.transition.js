function sum (nums) {  
    function transition (prevState, nextVal) {    
        return prevState + nextVal  
    }  
    const [initialState, ...tail] = nums  
    return tail.reduce(transition, initialState)

}