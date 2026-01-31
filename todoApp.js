class app{
    constructor(){
        this.task=[]
    }
    insert(operateAt,heading,sTime,fTime,desc){
        switch(operateAt){
            case "day":
                const time=new Date()
                    this.task.push({
                        title:heading,
                        taskType:operateAt,
                        startTime:sTime,
                        finishTime:fTime,
                        duration:`${sTime-fTime}`,
                        description:desc,
                        createdAt:new Date()
                })
        }

    }
}