import { useDebugValue, useState } from "react"
import MemeData from "../../Data/MemeData"
import "./hero.css"



export function Hero(){

    const[meme,setMeme] = useState({
        topText: "",
        bottomText : "",
        randomImage : ""
    })


    const [allMemeImages, setAllMemeImages] = useState(MemeData)

    function getMemeImage(){

        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage : url
            }
        })
        
    }


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(

        <>
            <div className="form">

                <input 
                name = "topText"
                type="text" 
                placeholder="Top Text" 
                className="form--input" 
                onChange={handleChange}
                value={meme.topText}
                />

                <input 
                name="bottomText"
                type="text" 
                placeholder="Bottom Text" 
                className="form--input"
                onChange={handleChange}
                value={meme.bottomText}
                />

                <button 
                className="form--button"
                onClick={getMemeImage}>
                    Get a new meme image
                </button>  


            

            </div>

            
            <div className="meme">
                    <img src={meme.randomImage} alt="" className="meme--image"/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        

        </>
    )
}