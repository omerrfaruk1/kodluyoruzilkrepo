var divCalculator = document.getElementById("calculator");
var divScreen = document.createElement("div");
var divButtons = document.createElement("div");
divCalculator.appendChild(divScreen);
divCalculator.appendChild(divButtons)
divScreen.innerHTML = `
 <input type="text" id="result"/>
`
divScreen.id = "screen";
divButtons.innerHTML = `
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>+</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>/</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
            <button>*</button>
            <form action="">
            <input type="button" name="C" value="C" onclick="temizlee()">
            </form>`;
divButtons.id = "buttons"
