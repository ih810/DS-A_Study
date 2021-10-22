//              Access  Search  Insert  Delete
//PriorityQueue    1       1     logn     logn

function PriorityQueue() {
    this.collection = [];
    this.printCollection = () => {
        console.log(this.collection);
    };
    this.enqueue = (newItem) => {
        //collection is empty
        if (this.isEmpty()) {
            return this.collection.push(newItem);
        }

        //FIFO, search from back of list for insert, reverse the collection
        this.collection = this.collection.reverse();

        //find priority that is <= newitem prio
        var found_index = this.collection.findIndex(function (item) {
            return newItem[1] >= item[1];
        });

        //if no element found, prio is largest
        if (found_index === -1) {
            this.collection.push(newItem);
        } else {
            //insert newItem at the top(end) of that prio
            this.collection.splice(found_index, 0, newItem);
        }
        //flip that shit
        this.collection = this.collection.reverse();
    };

    this.dequeue = () => {
        if (!this.isEmpty()) {
            return this.collection.shift()[0];
        } else {
            return "The queue is empty.";
        }
    };
    this.size = () => {
        return this.collection.length;
    };
    this.front = () => {
        return this.collection[0][0];
    };
    this.isEmpty = () => {
        return this.size() > 0 ? false : true;
    };
}