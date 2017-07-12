var prayers = {
    'HAIL_ETH': 'Hail Ether, Full of gainz<br>Our Vitalik is with you<br>Blessed are you amoungst crypto<br>and blessed is the fruit of your blockchain<br>ETH<br>Holy Ether, Mother of currency<br>pray for us Hodlers<br>now and at the hour of our Lambo<br><br>Amen.',
    'OUR_ETH': 'Our ETH who art in Ethereum<br>Hallowed be thy name<br>Thy Lambo come, thy moon become<br>On ETH as it is in heaven<br>Give us this day, our daily lift<br>and forgive us our spot requests<br>as we forgive those that request too much<br>and lead us not to panic sell<br>but deliver us to HODL<br><br>Amen.',
    'GLORY_BE': 'Glory be to the Vitalik,<br>and to the ETH<br>,and to the Ethereum.<br>As it was in the beginning<br>is not now,<br>nor ever shall be,<br> to the moon.<br><br>Amen.',
    'VITALIKS_CREED': 'I believe in Vitalik, the progenitor almighty,<br>Creator of ethereum and smart contracts.<br>Who was inspired by Bitcoin,<br>To give birth to his own blockchain<br>and redefine the status quo.<br>He implemented, tested, and verified his creation<br>And on the day of the ethereum ICO<br>He created the genesis block<br>And ascended as a crypto god.<br>He is now seated as part of the Ethereum Foundation<br>And will come again to deliver Metropolis and Serenity.<br><br>I believe in the ether,<br>the Ethereum Foundation<br>the Ethereum Enterprise Alliance,<br>the benefaction of PoS,<br>the calamity of PoW,<br>And to ascension to the mün everlasting.<br><br>Amen.'
}

function changePrayer(prayer) {
    if(typeof prayers[prayer] == 'undefined') {
        console.error('Prayer Undefined');
        return;
    }

    document.querySelector('.prayer').innerHTML = prayers[prayer];
}

window.onload = function() {
    changePrayer('HAIL_ETH');
}