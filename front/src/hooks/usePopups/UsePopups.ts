import { useState } from "react";

export function usePopups() {
    
    const [ registerPopupOpen, setRegisterPopupOpen ] = useState(false);
    
    const [ loginPopupOpen, setLoginPopupOpen ] = useState(false);
    
    return { registerPopupOpen, setRegisterPopupOpen, loginPopupOpen, setLoginPopupOpen }

}
