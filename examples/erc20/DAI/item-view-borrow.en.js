//<![CDATA[
class Token {

    constructor(token, card) {
        this.token = token;
        this.card = card;
        this.time = this.formatTimeStamp(this.card.timestamp.date);
    }

    formatTimeStamp(time) {
        let a = new Date(time);
        let hours = a.getHours();
        let minutes = a.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }

    render() {
        return`
        <div>
            <div class="container">
                <div class="logo">
                    <img src="data:image/png;base64,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">
                </div>
                <div class="info">
                    + ${(this.card._amount / 1e+18).toFixed(5)} DAI<br/>
                    <div class="time">${this.time}</div>
                </div>
                <div class="title">
                    Borrowing <strong>DAI</strong>
                </div>
                <div class="subtitle">
                    from Aave
                </div>
            </div>
        </div>
`;
    }
}

web3.tokens.dataChanged = (oldTokens, updated, tokenIdCard) => {
    document.getElementById(tokenIdCard).innerHTML = new Token(updated.token, updated.card).render();
};
//]]>
