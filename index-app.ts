/*
* 
* Author: Amanda Harris
* 
* ONYEN: amandaar
* 
* UNC Honor Pledge: I certify that no unauthorized assistance has been received 
* or given in the completion of this work. I certify that I understand and 
* could now rewrite on my own, without assistance from course staff, 
* the problem set code I am submitting. 
*/

import { print, promptNumber, promptString } from "introcs";

export let main = async () => {   
    let alive = true;
    let thirstLevel = 50;
    let bearLikeliness = 50;
    let isHarvestTime = false;
    let day = 0;
    let beetsCount = 10;
    while (isHarvestTime === false && alive === true) {
        print("Day: " + day);
        day += 1;
        
        let waterSprayOrHarvest = await promptString("Do you want to water, spray, or harvest your "
                                                + beetsCount + " beets? Type 'water', 'spray', or 'harvest'.");
        if (waterSprayOrHarvest === "water") {
            print(beetsCount + " beets have been watered!");
            thirstLevel -= 10;
            bearLikeliness += 10;
            beetsCount += 2;
        } else if (waterSprayOrHarvest === "spray") {
            print(beetsCount + " beets have been sprayed!");
            thirstLevel += 10;
            bearLikeliness -= 5;
        } else if (waterSprayOrHarvest === "harvest") {
            print(beetsCount + " beets have been harvested!");
            isHarvestTime = true;
        } else {
            print(beetsCount + " beets were not watered, sprayed, or harvested.");
            thirstLevel += 10;
            bearLikeliness += 10; 
        }

     
        if ( thirstLevel <= 0) {
            print("Your " + beetsCount + " beets have been overwatered");
            alive = false;
        } else if ( thirstLevel > 100) {
            print("Your " + beetsCount + " beets have been dehydrated");
            alive = false;

        } else if (bearLikeliness >= 100) {
            print("Your " + beetsCount + " beets were eaten by bears");
            alive = false;
        }

        if (alive === true && isHarvestTime === false) {
            print("Your " + beetsCount + " beets are alive!");
            print("Thirst Level of " + beetsCount + " beets: " + thirstLevel);
            print("Likeliness of Bear Attack of " + beetsCount + " beets: " + bearLikeliness);
        }
    }

      

    if (alive === true && isHarvestTime === true) {
        print("Your " + beetsCount + " beets were harvested after " + day + " days :)");

    } else if (alive === false)  {
        print("This means that " + beetsCount + " beets have died after " + day + " days :(");

    }
    
    };
main(); 