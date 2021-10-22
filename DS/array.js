//Static && Dynamic Array
//Static: arr w/ fixed lengths;
//indexable

//use case:
    //storing & accessing sequential data
    //temporarily store data
    //as buffer for large file
    //look up tables

                    //Static            //Dynamic
//Access            O(1)                O(1)
//Search            O(n)                O(n)
//Insert(splice)    N/A                 O(n)
//Append(push)      N/A                 O(1)
//Deletion          N/A                 O(n)

class dynamicArr {
    constructor(init){
        this.arr = [init]
    }
    length(){
        return this.arr.length
    }
    list(){
        for (let i = 0; i < this.arr.length; i++){
            console.log(this.arr[i])
            return this.arr[i]
        }
    }
    index(index){
        return arr[index]
    }
    insert(){

    }
    append(elem){
        let i = 0
        do {
            i++
        } while(i !== this.arr.length);
        this.arr[i] = elem
        return
    }
    delete(){

    }
    clear(){
        for(let i = 0; i < this.arr.length; i++){
            this.arr[i] = null
        }
    }
}

//is there a point to make my own array?