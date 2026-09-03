let playAgain=true;
while (playAgain) {
    let ranNum = Math.floor(Math.random() * 11);
    while (true) {
        let num= prompt("Guess a number between 0 and 10:");
        if (num==ranNum){
            alert("yayyyyy,คุณเดาถูก");
            break;
        }else if (num>ranNum) {
            alert("เลขของคุณสูงเกินไป กรุณาลองใหม่อีกครั้ง");

        }else {
            alert("เลขของคุณน้อยเกินไป กรุณาลองใหม่อีกครั้ง");
        }
    }

playAgain = confirm("คุณต้องการเล่นอีกครั้งหรือไม่?");
}
alert("ขอบคุณที่เล่นเกมนี้");
