import Swal from "sweetalert2"


export const swAlert = ( title, icon="info", text="" ) => {

    // icon: seccess / error / warning / info / question

    Swal.fire({
        title,
        text,
        icon,
    })
}