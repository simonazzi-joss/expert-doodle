$(function() {
    var fieldsToTranslate = getAllFieldsToTranslate();
    var request = {};
    
    for(var i=0; i<fieldsToTranslate.length; i++) {
        request[ fieldsToTranslate[i].getAttribute('data-translation') ] = '';
    }

    var objResponse = getResponse();

    for(var idTrans in objResponse) {
        translateFields(idTrans, createString(objResponse[idTrans]));
    }

    function getAllFieldsToTranslate() {
        return $('[data-translation]');        // se si riuscisse a fare senza jquery, sarebbe perfetto
    }

    function translateFields(idTrans, translation) {
        $('[data-translation="' + idTrans + '"]').text(translation);
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
});