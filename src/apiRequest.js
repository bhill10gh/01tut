const apiRequest = async (url = '', optionsObj = null, apiRequestResultMsg = null,  errMsg = null)  => {
    try {
        try {
            const response = await fetch(url, optionsObj);
            if(!response.ok) throw Error('Please reload the app');            
        } catch (error) {
            throw Error(error.message)
        }
    } catch (error) {
        errMsg = error.message;  
        apiRequestResultMsg(errMsg);      
    } finally {
        apiRequestResultMsg(errMsg);
        return errMsg;
    }
}

export default apiRequest