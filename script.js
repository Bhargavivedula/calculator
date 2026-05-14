  <script>

    let screen =
      document.getElementById("screen");

    // APPEND VALUE

    function appendValue(value){

      if(screen.innerText === "0"){

        screen.innerText = value;

      }

      else{

        screen.innerText += value;

      }

    }

    // CLEAR SCREEN

    function clearScreen(){

      screen.innerText = "0";

    }

    // CALCULATE

    function calculate(){

      try{

        let expression =
          screen.innerText;

        let result =
          eval(expression);

        screen.innerText =
          result;

        addToHistory(
          expression,
          result
        );

      }

      catch{

        screen.innerText =
          "Error";

      }

    }

    // BACKSPACE

    function backspace(){

      screen.innerText =
        screen.innerText.slice(0,-1);

      if(screen.innerText === ""){

        screen.innerText = "0";

      }

    }

    // HISTORY

    function addToHistory(
      expression,
      result
    ){

      let historyList =
        document.getElementById(
          "historyList"
        );

      let li =
        document.createElement("li");

      li.innerText =
        expression + " = " + result;

      historyList.prepend(li);

    }

    // THEME TOGGLE

    function toggleTheme(){

      document.body.classList.toggle(
        "light-mode"
      );

    }

    // KEYBOARD SUPPORT

    document.addEventListener(
      "keydown",
      function(e){

      if(
        !isNaN(e.key) ||
        "+-*/.%".includes(e.key)
      ){

        appendValue(e.key);

      }

      if(e.key === "Enter"){

        calculate();

      }

      if(e.key === "Backspace"){

        backspace();

      }

      if(e.key === "Escape"){

        clearScreen();

      }

    });

    // DIGITAL CLOCK

    function updateClock(){

      let now =
        new Date();

      let time =
        now.toLocaleTimeString();

      document.getElementById(
        "clock"
      ).innerText = time;

    }

    setInterval(updateClock,1000);

    updateClock();

    // AI ASSISTANT

    function aiReply(){

      let input =
        document
        .getElementById("aiInput")
        .value
        .toLowerCase();

      let response =
        document.getElementById(
          "aiResponse"
        );

      if(input.includes("hello")){

        response.innerText =
          "Hello 👋";

      }

      else if(
        input.includes("creator")
      ){

        response.innerText =
          "Created by Frontend Expert 🚀";

      }

      else{

        response.innerText =
          "I am Calculator AI 🤖";

      }

    }

    // CURRENCY CONVERTER

    function convertCurrency(){

      let inr =
        document.getElementById(
          "rupees"
        ).value;

      let usd = inr / 83;

      document.getElementById(
        "usdResult"
      ).innerText =
        "$ " + usd.toFixed(2);

    }

    // UNIT CONVERTER

    function convertCM(){

      let cm =
        document.getElementById(
          "cmInput"
        ).value;

      let meter = cm / 100;

      document.getElementById(
        "meterResult"
      ).innerText =
        meter + " meters";

    }

    // CHANGE THEME

    function changeTheme(color){

      document.body.style.background =
        color;

    }

    // DRAGGABLE CALCULATOR

    let calc =
      document.getElementById(
        "dragBox"
      );

    let isDragging = false;

    let offsetX,
        offsetY;

    calc.addEventListener(
      "mousedown",
      function(e){

      isDragging = true;

      offsetX =
        e.clientX - calc.offsetLeft;

      offsetY =
        e.clientY - calc.offsetTop;

    });

    document.addEventListener(
      "mousemove",
      function(e){

      if(isDragging){

        calc.style.position =
          "absolute";

        calc.style.left =
          (e.clientX - offsetX)
          + "px";

        calc.style.top =
          (e.clientY - offsetY)
          + "px";

      }

    });

    document.addEventListener(
      "mouseup",
      function(){

      isDragging = false;

    });

  </script>
