const cards = document.querySelectorAll('.memory-card');
let lockBoard = false; 
let hasFlipCard = false;
let firstCard, secondCard;

function flipCard(){
    if (lockBoard) return; // đợi hình lật xong
    if (this === firstCard) return;

    this.classList.add('flip');
    //add: thêm class flip vào .
    //toggle : thêm class vào nều class chưa có và remove class đi nếu class có rồi.
    if(!hasFlipCard){
        //first click
        hasFlipCard = true; // đã lật hình
        firstCard = this;   // lưu sự kiện cho this (memory-card.flip)
        return ;
    }
        //second click;
        hasFlipCard = false; // chưa lật hình
        secondCard = this;

        checkForMath();
        
    }



    function checkForMath(){
        // kiểm tra hai hình có match ko ?
        //Lấy dữ liệu ra trong từ Data attribute .Tiền tố Data- đều là Data attribute
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        // Viết If () {}else ngắn gọn 
        isMatch ? disableCards() : unflipCards();
    }

//Hai hình giống nhau thì nếu có click lại lần nữa thì sẽ ko lật lại hình vì đã remove sự kiện.
    function disableCards(){
        firstCard.removeEventListener('click',flipCard);
        secondCard.removeEventListener('click',flipCard);
    }

//Hai hình ko giống nhau
    function unflipCards(){
        lockBoard = true;
    // Sau 1.5s thì remove class flip 
        setTimeout(()=>{
            //remove class flip.
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        
        }, 1500);
    }

    function resetBoard(){
        [hasFlipCard, lockBoard] = [false,false];
        [firstCard, secondCard] = [null,null];
    }

    function shuffle(){

    }

cards.forEach(card => card.addEventListener('click', flipCard));