 /**
  * chair --> 3cft
  * table --> 10cft
  * bed--> 50cft
  */

    function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
        const perChairWood = 3;
        const perTableWood = 10;
        const perBedWood = 50;

        const totalChairwood = chairQuantity * perChairWood;
        const totalTablewood = tableQuantity * perTableWood;
        const totalBedWood = bedQuantity * perBedWood;
        const totalWood = totalChairwood + totalTablewood + totalBedWood;
        return totalWood;
    }
      const wood = woodQuantity(1,1,4);
      console.log('wood need: ', wood);


      // shirt price --> 500
      // pant price --> 600
      // shooes price --> 700 