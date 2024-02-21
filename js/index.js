const kbds = document.getElementsByClassName('kbd');
for (const kbd of kbds) {
    var clickCounter = 0;
    kbd.addEventListener("click", function () {
        const purchaseButton = document.getElementById('purchase-button');
        purchaseButton.removeAttribute('disabled');
        // its my coustom
        

        // coustom end
        clickCounter++;

        if (clickCounter <= 4) {
            const totalSeatNumber = document.getElementById('total-seat-number');
            totalSeatNumber.innerText = clickCounter;
            let totalSeat = 40;
            let abilableSeat = totalSeat - clickCounter;
            const abilableSeatShow = document.getElementById('abilable-seat');
            abilableSeatShow.innerText = abilableSeat;
            const totalPrice = 550 * clickCounter;
            const totalPriceShow = document.getElementById('total-price');
            totalPriceShow.innerText = totalPrice;
            const grandTotal = document.getElementById('Grand-total');
            grandTotal.innerText = totalPrice ;
            document.getElementById('copune-btn').addEventListener("click", function(){
                const copuneInputValue = document.getElementById('copune-input').value;
                if(copuneInputValue === 'NEW15'){
                    const dis15 = totalPrice * 85 / 100;
                    grandTotal.innerText = dis15 ;
                }
                else if(copuneInputValue === 'Couple 20'){
                    const dis15 = totalPrice * 80 / 100;
                    grandTotal.innerText = dis15 ;
                }
                const clickOnHide = document.getElementById('click-on-hide');
                clickOnHide.style.display = 'none'
            });
            
            // console.log(copuneInputValue)
            if(clickCounter === 4){
                const copuneInput = document.getElementById('copune-input');
                copuneInput.removeAttribute('disabled');
                const copuneBtn = document.getElementById('copune-btn');
                copuneBtn.removeAttribute('disabled');
            }
            const kbdText = kbd.innerText;
            const kbdStyle = kbd;
            kbd.removeEventListener("click", arguments.callee);
            kbdStyle.style.background = '#1DD100'

            const ticketNumberContainer = document.getElementById('ticket-number-container');
            const p1 = document.createElement('h2');
            p1.innerText = kbdText;
            const p2 = document.createElement('p');
            p2.innerText = 'Economoy';
            const p3 = document.createElement('p');
            p3.innerText = '550';
            ticketNumberContainer.appendChild(p1)
            ticketNumberContainer.appendChild(p2)
            ticketNumberContainer.appendChild(p3)
        }
    });

}

document.getElementById('purchase-button').addEventListener('click', function(){
    const mainPart = document.getElementById('main-part');
    mainPart.classList.add('hidden')
    const success = document.getElementById('success');
    success.classList.remove('hidden');
});
document.getElementById('brack-home-page').addEventListener('click', function(){
    const success = document.getElementById('success');
    success.classList.add('hidden');
    const mainPart = document.getElementById('main-part');
    mainPart.classList.remove('hidden')
})