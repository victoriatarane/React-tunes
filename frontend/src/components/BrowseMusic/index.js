import { useState, useEffect } from 'react';
import { selectArtist } from './components/BrowseMusic';
import { useDispatch } from 'react-redux';



export const BrowseMusic = ({ song }) => {
    const dispatch = useDispatch();
    const [artist, setArtist] = useState();
    let Artists = {};
    song.artistId.forEach(id => {
        if (!artist.id){
            Artists[`${artist.id}`] = song.artist.findById(`${artist.id}`).artistName;
        }
    })


    // useEffect(() => {
    //     dispatch(selectArtist())
    // }, [artist])
    return (
        <div>
            <select
            onChange={(e) => setArtist(e.target.value)}
            value={artist}>
                {Object.values(Artists).map(artist => (
                    <option
                        key={artist}
                    >
                        {artist}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default BrowseMusic;