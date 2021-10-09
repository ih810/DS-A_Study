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
//time is still the same O(n)
//space is O(1)
function getMeetingCycle (linkedList){
    let slow = linkedList;
    let fast = linkedList;
    let met = false;

    while(slow&&fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            met = true
            break;
        }
    }
    if(!met){
        return false
    } else {
        slow = linkedList;
        while(slow!=fast){
            slow = slow.next
            fast = fast.next
        }
        return slow
    }
}