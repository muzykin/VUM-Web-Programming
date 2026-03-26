function encodeAndDecodeMessages() {
    let [encodeBtn, decodeBtn] = document.querySelectorAll('button');
    let [sender, receiver] = document.querySelectorAll('textarea');

    encodeBtn.addEventListener('click', () => {
        let message = sender.value;
        let encoded = '';

        for (let char of message) {
            encoded += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        receiver.value = encoded;
        sender.value = '';
    });

    decodeBtn.addEventListener('click', () => {
        let message = receiver.value;
        let decoded = '';

        for (let char of message) {
            decoded += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        receiver.value = decoded;
    });
}