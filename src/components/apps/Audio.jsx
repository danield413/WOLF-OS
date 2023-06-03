import React from 'react'
import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player'

const AudioStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;

    button {
        margin: 0 auto;
        margin-top: 20px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: white;
        color: #000;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: bold;
        &:hover {
            background-color: #0cb994;
            color: #1a1a1a;
        }
    }
`

const Audio = () => {

    const [audio, setAudio] = React.useState("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
    const [counter, setCounter] = React.useState(1)

    const handleChange = () => {
        setAudio(`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${counter+1}.mp3`)
        setCounter(counter+1)
    }

  return (
    <AudioStyle>
        <ReactAudioPlayer
        src={audio}
        controls
        />

    <button onClick={handleChange}>Cambiar</button>
    </AudioStyle>
  )
}

export default Audio