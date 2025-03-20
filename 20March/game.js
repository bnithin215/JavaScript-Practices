const max=prompt("enter a max number");
        let random=Math.floor(Math.random()*max)+1;
        // console.log(random);
        let guess=prompt("guess a number");
        while(true){
                if(guess=="quit"){
                        console.log("user quitted")
                        break;
                }if(guess==random){
                        console.log("user won random number was "+random);
                        break;
                }else if(guess<random){
                        guess=prompt("your answer is too low, guess again");
                }else{
                        guess=prompt("your answer is too high, guess again");
                }




                // else{
                //         guess=prompt("your answer is wrong try again")
                // }

        }
        