import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

//-> react icon imports
import { IoCodeSlash, IoMusicalNote } from 'react-icons/io5'; 
import { RiMacbookFill } from 'react-icons/ri'; 

const Loading = () => {
    return (
        <div className={'loading_screen'}>
            <div>
                <Loader
                    type="Audio"
                    color="#008DD5"
                    height={65}
                    width={65}
                    timeout={5000} //5 secs
                />
                <h4> Coding & a Playlist <RiMacbookFill/>  <IoCodeSlash size={'1em'} /> <IoMusicalNote/> </h4>
            </div>
        </div>
    )
}

export default Loading;
