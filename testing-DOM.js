function billWithSettings(){
    
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;


    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost){
        theCallCost = callCost
    }

    function getCallCost(){
        return theCallCost
    }
    
    function setSmsCost(smsCost){
        theSmsCost = smsCost
    }

    function getSmsCost(){
        return theSmsCost
    }

    function setWarninglevel(warningLevel){
        theWarningLevel = warningLevel
    }

    function getwarningLevel(){
        return theWarningLevel
    }

    function setCritivalLevel(criticalLevel){
        theCriticalLevel = criticalLevel
    }

    function getCriticalLevel(){
        return theCriticalLevel
    }

    function makeCall(){

        if(!hasReachedCriticalLevel()){
            callCostTotal += theCallCost
        }
    
    

    }
    function makeSms(){

        if(!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost
        }
        

    }
    function getTotalCost(){
        return callCostTotal + smsCostTotal

    }
    
    function getTotalCallCost(){
        return callCostTotal

    }

    function getTotalSmsCost(){
        return smsCostTotal

    }
    function hasReachedCriticalLevel(){
        return getTotalCost() >= getCriticalLevel()
    }

    function totaClassName(){

        if (hasReachedCriticalLevel()){
            return "critical"
        }

        if (getTotalCost() >= getwarningLevel()){
            return 'warning'
        }
       

    }
    return{
        hasReachedCriticalLevel,
        setCritivalLevel,
        getCriticalLevel,
        setWarninglevel,
        getwarningLevel,
        setSmsCost,
        getSmsCost,
        setCallCost,
        getCallCost,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        makeSms,
        totaClassName
    }
}