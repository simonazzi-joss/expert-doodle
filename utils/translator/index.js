(function() {
    /*******************************************
     *    SEARCHING FOR FIELDS TO TRANSLATE    *
     *******************************************/ 
    var fieldsToTranslate = getAllFieldsToTranslate();
    var request = {};
    
    for(var i=0; i<fieldsToTranslate.length; i++) {
        request[ fieldsToTranslate[i].getAttribute('data-translation') ] = '';
    }

    /*******************************************
     *      SENDING REQUEST TO THE SERVER      *
     *******************************************/ 
    var objResponse = getResponse();


    /*******************************************
     *          APPLING TRANSLATIONS           *
     *******************************************/ 
    for(var idTrans in objResponse) {
        translateFields(idTrans, createString(objResponse[idTrans]));
    }


    /*******************************************
     *            SYSTEM FUNCTIONS             *
     *******************************************/ 
    function getAllFieldsToTranslate() {
        return document.querySelector('[data-translation]');        // se si riuscisse a fare senza jquery, sarebbe perfetto
    }

    function translateFields(idTrans, translation) {
        var res = document.querySelectorAll('[data-translation="' + idTrans + '"]');
        for(var i = 0; i < res.length; i++) {
            res[i].innerText = translation;
        }
    }

    function createString(obj) {
        var text = obj.text;
        if(obj.data) {
            for(var i=0; i<obj.data.length; i++) {
                text = text.replace('%S', obj.data[i]);
            }
        }
        return text;
    }

    function getResponse() {
        return {
            WELCOME: {
                text: 'Hellow %S',
                data: [
                    'Someone :D'
                ]
            },
            TXT1: {
                text: '%S %S %S %S',
                data: [
                    'TESTO',
                    'generato',
                    'automaticamente',
                    ':D'
                ]
            },
            GOODBYE: {
                text: 'Bye'
            }
        };
    }
}) ();