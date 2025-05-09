import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Sencer.css';
import { useState } from 'react';


function Sender() {
    const [videoUrl, setVideoUrl] = useState('');
    const [linkUrl, setLinkUrl] = useState('');

    const handleButtonClick = () => {
        if (linkUrl) {
            window.open(linkUrl, '_blank');
        }
    };

    return (
        <div className="sender-container">
            {videoUrl && (
                <ReactPlayer
                url={videoUrl}
                controls
                style={{ marginTop: '20px' }}
                />
            )}

            {linkUrl && (
                <button className="link-button" onClick={handleButtonClick}>
                Go to Link
                </button>
            )}
            <div>
            <input
                type="text"
                placeholder="Enter video URL (e.g. YouTube)"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="input-field"
            />

            <input
                type="text"
                placeholder="Enter link for the button"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="input-field"
            />
            </div>
        </div>
    );
}

export default Sender;