class app{
    constructor(){
        this.task=[]
    }
    insert(operateAt,heading,sTime,fTime,desc){
        switch(operateAt){
            case "day":
                    this.task.push({
                        title:heading,
                        taskType:operateAt,
                        startTime:sTime,
                        finishTime:fTime,
                        duration:`${sTime-fTime}`,
                        description:desc,
                        createdAt:new Date()
                })
                break
            case "month":
                    this.task.push({
                        title:heading,
                        taskType:operateAt,
                        startTime:sTime,
                        finishTime:fTime,
                        duration:`${sTime-fTime}`,
                        description:desc,
                        createdAt:new Date()
                })
                break
            default:
                console.log("Invalid case")
        }
        return this.task
    }
    remove(index){
        return this.task.pop(index)


    }
}



const appData=new app()
let day=new Date().getDay
let operattime="month"
let stTime=new Date()
let fiTime=new Date()+12
let timediff=fiTime-stTime
console.log((timediff)/(1000*60))
console.log(appData.insert(operattime,"this is mypause line for this ",`${new Date()}`,`${new Date()}`,"fdsifjsdfisdfodsifjsdiof"))
console.log(appData.insert(operattime,"this is mypause line for this ",`${new Date()}`,`${new Date()}`,"fdsifjsdfisdfodsifjsdiof"))
cconsole.log(appData.insert(operattime,"this is mypause line for this ",`${new Date()}`,`${new Date()}`,"fdsifjsdfisdfodsifjsdiof"))
console.log(appData.insert(operattime,"this is mypause line for this ",`${new Date()}`,`${new Date()}`,"fdsifjsdfisdfodsifjsdiof"))
// console.log(appData.remove(1))

