function hasCycle (linkedList){
    let slow = linkedList;
    let fast = linkedList;

    while(slow&&fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true
        }
    }
    return false
}