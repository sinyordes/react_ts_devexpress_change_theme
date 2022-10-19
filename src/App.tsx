import React, {useState} from 'react';
import FileUploader from 'devextreme-react/file-uploader';
import Button from 'devextreme-react/button';
import TextBox from 'devextreme-react/text-box';
import notify from 'devextreme/ui/notify';
import {Helmet} from "react-helmet";
import {currentTheme, refreshTheme} from "devextreme/viz/themes";
import themes from "devextreme/ui/themes";


export  function Test(){
    currentTheme("material.blue.dark");
    refreshTheme();
    return(
        <form id="form"  method="post" action="" encType="multipart/form-data">
            <h3>Profile Settings</h3>
            <div className="dx-fieldset">
                <div className="dx-field">
                    <div className="dx-field-label">First Name:</div>
                    <TextBox name="FirstName" value="John" className="dx-field-value" />
                </div>
                <div className="dx-field">
                    <div className="dx-field-label">Last Name:</div>
                    <TextBox name="LastName" value="Smith" className="dx-field-value" />
                </div>
            </div>
            <div className="fileuploader-container">
                <FileUploader selectButtonText="Select photo" labelText="" accept="image/*" uploadMode="useForm" />
            </div>
            <Button className="button" text="Update profile" type="success"  />
        </form>
    )
}



function App(){

    const [theme,setTheme]=useState(0)
    console.log(theme)

    const tikla =()=>{
        setTheme(theme+1)
        if (theme%2==1){
            themes.current("dark");
        }else{
            themes.current("light");
        }


    }


    return(
        <>
       <Test/>
            <button onClick={()=>tikla()}>Tıkla</button>
        </>
    )
}

export default App;
