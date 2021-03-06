import '../Layouts/css/iziToast.css';
import iziToast from "izitoast";

export const ToastSuccess = message => 
{
	iziToast.success({
        title: "Success",
        icon: "ico-success",
        message: message,
        // iconColor: "rgb(0, 255, 184)",
        // theme: "dark",
        // progressBarColor: "rgb(0, 255, 184)",
        position: "topCenter",
        transitionIn: "bounceInDown",
        transitionOut: "fadeOut",
        timeout: 2000
    });
}

export const ToastDanger = message => 
{
    if(Array.isArray(message))
    {
        for(let i = 0; i < message.length; i++)
        {
            iziToast.error({
                title: "Error",
                icon: "ico-error",
                message: message[i],
                position: "topCenter",
            });
        }
    }
    else
    {
        iziToast.error({
            title: "Error",
            icon: "ico-error",
            message: message,
            position: "topCenter",
        });
    }
}

export const ToastWarning = message => 
{
    iziToast.warning({
        title: "Warning",
        icon: "ico-warning",
        message: message,
        position: "topCenter",
    });
}


export const ToastQuestion = callback => {

    iziToast.show({
        timeout: 20000,
        close: false,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 99999,
        title: 'Sign-Out',
        message: 'Are you sure you want to sign-out ?',
        position: 'topCenter',
        iconColor: "rgb(0, 255, 184)",
        theme: "dark",
        progressBarColor: "rgb(0, 255, 184)",
        buttons: [
            ['<button><b>YES</b></button>', function (instance, toast) {
        
                // these line takes value and a callback function as arguments
                callback();

                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
     
            }, true],
            ['<button>NO</button>', function (instance, toast) {
     
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
     
            }],
        ],
        onClosing: function(instance, toast, closedBy){
            console.info('Closing | closedBy: ' + closedBy);
        },
        onClosed: function(instance, toast, closedBy){
            console.info('Closed | closedBy: ' + closedBy);
        }
    });
}