import { Toast } from "native-base";

const toastShow = (message = 'Some message', type)=>{
    Toast.show({
        text: message,
        buttonText: 'Okay',
        duration: 3000,
        type
    });
}

export {
    toastShow
}