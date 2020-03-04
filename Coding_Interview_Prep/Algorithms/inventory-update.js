/** check if an inventory contain an item 
 * @param {[number, string]} item
 * @param {[[number, string]]} inventory[] 
 */
function checkInventory(item, inventory)
{
    for(let invItem in inventory)
    {      
        if(inventory[invItem][1] == item[1])
        {
            return invItem;
        }
    }
    return -1;
}

/**
 * 
 * @param {[[number, string]]} curInv - current inventory to be updated
 * @param {[[number, string]]} newInv - new inventory containing a fresh delivery
 */
function updateInventory(curInv, newInv) {
    // All inventory must be accounted for or you're fired!
    const updatedInv = [...curInv];

    /** sort the inventory array in alphabetical order by item.*/
    const sortFunc = (a, b) =>{        
        if(a[1] > b[1])
        {
            return 1
        }
        if(a[1] <= b[1])
        {
            return -1;
        }
    };
    
    //loop throught the items in the fresh delivery
    for(let item of newInv)
    {
        //check if the item already exist in the inventory
        let itemIndex = checkInventory(item, curInv);
        if(itemIndex >= 0 )
        {
            //if it exists, update quantity
            updatedInv[itemIndex][0] += item[0];
        }
        else
        {
            //if not, push it
            updatedInv.push(item);
        }
    }
    //return a new array containing an updated inventory    
    return updatedInv.sort(sortFunc);
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])