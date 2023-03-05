let arrText = [
   "Learning English has always been a task for most of us. We know the rules of grammar, but it is not only about the subtle grammar rules",
    "The more English words we know the easier it gets for us to learn English. One thing we ignore is the use of phrases",
    "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "How much wood would a woodchuck chuck?",
  "I have a dream that one day this nation will rise up.",
  "To be or not to be, that is the question.",
  "Four score and seven years ago our fathers brought forth on this continent.",
  "Ask not what your country can do for you, ask what you can do for your country.",
  "It is a truth universally acknowledged, that a single man in possession of a good fortune.",
  "In the beginning God created the heavens and the earth.",
  "All animals are equal, but some animals are more equal than others.",
  "Now is the winter of our discontent.",
  "A rose by any other name would smell as sweet.",
  "It was the best of times, it was the worst of times.",
  "It is better to be feared than loved.",
  "I think, therefore I am.",
  "All the world's a stage, and all the men and women merely players.",
  "There is no charm equal to tenderness of heart.",
  "It does not do to dwell on dreams and forget to live.",
  "To thine own self be true.",
  "The only way to do great work is to love what you do."];



    let lengthArrayText = arrText.length;
    let randomText = document.getElementById("showSentance");
    let btn = document.getElementById("btn");
    let result = document.getElementById("result");
    let text = document.getElementById("text");
    let startTime;
    let endTime;
    let time;

    btn.addEventListener('click',mainFunction);

    function mainFunction(){
      const btnText = btn.innerHTML;
      switch(btnText){
         case "Start":
            startTypingTest()
            break;
            case "Submit":
               endTypingTest();
      }
    }

      function startTypingTest(){
        btn.innerHTML="Submit";
        text.disabled=false;
        const ranNum = Math.floor(Math.random()*lengthArrayText);
        randomText.innerHTML=arrText[ranNum];
         result.innerHTML = "Result : ";
         let date = new Date();
         startTime = date.getTime();
         text.value="";
         document.getElementById("wrong").innerText="";
      }

    function endTypingTest(){
         btn.innerText="Start";
         text.disabled=true;
         let submitSentance = document.getElementById("text").value.trim();
         const givenSentance = randomText.innerHTML;
         let date = new Date();
         endTime = date.getTime();
         let time = Math.round((endTime-startTime)/1000);
         calculateTypingSpeed(submitSentance,givenSentance,time);
         
      }
                                    
      function calculateTypingSpeed(str1,str2,totalTime){
         str1=str1.trim();
         str2=str2.trim();
         let arr1 = str1.split(" ");
         let arr2 = str2.split(" ");
         let countOfWords = arr1.length;
         let rpm = 0;
         let wrongWord = "";
         let ans = "";
         if(str1.length==0){
            rpm=0;
            countOfWords=0;
            totalTime=0;
            document.getElementById("wrong").innerText = "You have not written any word";
            ans = "You typing speed is "+rpm+" words per minutes & your wrote "+countOfWords+ " words & time taken "+totalTime+" seconds";
         }
         else 
         {
            rpm = Math.floor((countOfWords/totalTime)*60);
            wrongWord = check(arr1,arr2);
            if(wrongWord.length === 0)
            {
               document.getElementById("wrong").innerText = "You have written correct sentance";
            }
            else{
               document.getElementById("wrong").innerText =  wrongWord ;
            }
            ans = "You typing speed is "+rpm+" words per minutes & your wrote "+countOfWords+ " words & time taken "+totalTime+" seconds";
         }
         
         result.innerHTML = ans;

    }
    //This function check wheather the user entered correct sentance;
    function check(arr1,arr2){
         let correctWord = "";
         let wrongWord = "";
         let ans="";
      for(let i=0;i<arr1.length;i++)
      {
         if(arr1[i] != arr2[i]){
            arr1[i].trim();
            correctWord =correctWord+arr2[i]+" ";
            wrongWord =wrongWord.trim()+" " +arr1[i]+" ";
         }
      }
      ans = "You have written "+wrongWord+" in place of "+correctWord;
      return ans;
    }
