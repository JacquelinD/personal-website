import React from "react";
import "./preview.css";

const Previews = [
    {
        title: "About Me",
        body: "",
        imgURL:""
    }
    //future previews are latest blog, disc, and reading
]

const Preview = () => {
    return(
        <div className="preview-container">
            {Previews.map((preview, index) => (
                <div index={index} preview={preview}>
                    <h2 className="heading">{preview.title}</h2>
                    <p>{preview.body}</p>
                    <img className="image" src={preview.imgURL} alt={preview.title}/>
               </div>
            ))};
        </div>
    );
};

export default Preview;