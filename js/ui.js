class Interface {

    showMsg(msg, classes) {
        const div = document.createElement('div');
        div.className = classes;
        div.appendChild(document.createTextNode(msg));

        // Add msg to the div
        const msgDiv = document.querySelector('.mensajes');
        msgDiv.appendChild(div);
        
        // time out for the alert
        setTimeout( () => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }   
}
