class Response {
    constructor(
    ) {
        this.addInfo = function(data){
            this.message = data.message;
            this.status = data.status;
            this.brinde = data.brinde;
        }
    }

    
}

module.exports = Response