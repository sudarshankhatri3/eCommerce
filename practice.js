class practice{
    constructor(data){
        this.data=data
    }
    // array method practice 
    checkdataMethod(){
        let res=[]
        //foreach method in array
        this.data.forEach((value,index) => {
            res.push(`index ${index} has value ${value}`)
        });
        // using map metod to manipulate the array
        let mp=this.data.map((num)=>num+5)
        //filter method is used to check the condition
        let filt=this.data.filter((num)=>num%3)
        //reduce perfom some operation and return a single value
        let rd=this.data.reduce((sum,currentValue)=>currentValue+sum)

        let fd=this.data.find((num)=>num>10)
        let newArr=this.data.push(343)
        console.log(this.data.splice(1,5))
        console.log(this.data.splice(1,4,"hellosirji"))
        return `foreach:${res} ,result of map:${mp} filter:${filt} reduce:${rd} find:${fd}`
    }
}
let data=[12,23,3443,5,65,33,2,3,4,5,767,5,656,56,5656,55,5656,565]
ob=new practice(data)
console.log(ob.checkdataMethod())