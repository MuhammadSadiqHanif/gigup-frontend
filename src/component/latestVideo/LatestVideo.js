import React from 'react'
import './LatestVideo.scss'
import image1 from './../assests/latestPhoto1.png'
import image2 from './../assests/latestPhoto2.png'
import image3 from './../assests/latestPhoto3.png'
import image4 from './../assests/latestPhoto4.png'
function LatestVideo() {
    return (
        <div className="latestVideoContainer ">
            <h4 className="mb-4">Latest Videos</h4>
            <div className="photosDiv">
                <div className="photo1Div col-lg-3" style={{ backgroundImage: `url(${image1})` }}>
                    <div className="playBack">
                        <p className="playTime">3:34 mins</p>
                        <button className="playButton"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM15.0181 11.6685L9.68604 15.5479C9.6568 15.5689 9.62235 15.5814 9.58645 15.5841C9.55056 15.5868 9.51461 15.5795 9.48257 15.5631C9.45053 15.5467 9.42362 15.5218 9.40482 15.4911C9.38601 15.4604 9.37603 15.4252 9.37598 15.3892V7.63525C9.37586 7.59919 9.38573 7.56379 9.4045 7.53299C9.42326 7.50219 9.4502 7.47718 9.4823 7.46075C9.51441 7.44432 9.55044 7.4371 9.5864 7.43989C9.62236 7.44268 9.65685 7.45537 9.68604 7.47656L15.0181 11.3535C15.0433 11.3713 15.0638 11.3949 15.078 11.4223C15.0922 11.4497 15.0996 11.4801 15.0996 11.511C15.0996 11.5418 15.0922 11.5722 15.078 11.5996C15.0638 11.627 15.0433 11.6506 15.0181 11.6685Z" fill="#E5E5E5" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="photo23Div col-lg-3">
                    <div className="photo2Div " style={{ backgroundImage: `url(${image2})` }} >
                        <div className="playBack">
                            <p className="playTime">3:34 mins</p>
                            <button className="playButton"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM15.0181 11.6685L9.68604 15.5479C9.6568 15.5689 9.62235 15.5814 9.58645 15.5841C9.55056 15.5868 9.51461 15.5795 9.48257 15.5631C9.45053 15.5467 9.42362 15.5218 9.40482 15.4911C9.38601 15.4604 9.37603 15.4252 9.37598 15.3892V7.63525C9.37586 7.59919 9.38573 7.56379 9.4045 7.53299C9.42326 7.50219 9.4502 7.47718 9.4823 7.46075C9.51441 7.44432 9.55044 7.4371 9.5864 7.43989C9.62236 7.44268 9.65685 7.45537 9.68604 7.47656L15.0181 11.3535C15.0433 11.3713 15.0638 11.3949 15.078 11.4223C15.0922 11.4497 15.0996 11.4801 15.0996 11.511C15.0996 11.5418 15.0922 11.5722 15.078 11.5996C15.0638 11.627 15.0433 11.6506 15.0181 11.6685Z" fill="#E5E5E5" />
                            </svg>
                            </button>
                        </div>
                    </div>
                    <div className="photo3Div " style={{ backgroundImage: `url(${image3})` }} >
                        <div className="playBack">
                            <p className="playTime">3:34 mins</p>
                            <button className="playButton"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM15.0181 11.6685L9.68604 15.5479C9.6568 15.5689 9.62235 15.5814 9.58645 15.5841C9.55056 15.5868 9.51461 15.5795 9.48257 15.5631C9.45053 15.5467 9.42362 15.5218 9.40482 15.4911C9.38601 15.4604 9.37603 15.4252 9.37598 15.3892V7.63525C9.37586 7.59919 9.38573 7.56379 9.4045 7.53299C9.42326 7.50219 9.4502 7.47718 9.4823 7.46075C9.51441 7.44432 9.55044 7.4371 9.5864 7.43989C9.62236 7.44268 9.65685 7.45537 9.68604 7.47656L15.0181 11.3535C15.0433 11.3713 15.0638 11.3949 15.078 11.4223C15.0922 11.4497 15.0996 11.4801 15.0996 11.511C15.0996 11.5418 15.0922 11.5722 15.078 11.5996C15.0638 11.627 15.0433 11.6506 15.0181 11.6685Z" fill="#E5E5E5" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="photo4div col-lg-6" style={{ backgroundImage: `url(${image4})` }} >
                    <div className="playBack">
                        <p className="playTime">3:34 mins</p>
                        <button className="playButton"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM15.0181 11.6685L9.68604 15.5479C9.6568 15.5689 9.62235 15.5814 9.58645 15.5841C9.55056 15.5868 9.51461 15.5795 9.48257 15.5631C9.45053 15.5467 9.42362 15.5218 9.40482 15.4911C9.38601 15.4604 9.37603 15.4252 9.37598 15.3892V7.63525C9.37586 7.59919 9.38573 7.56379 9.4045 7.53299C9.42326 7.50219 9.4502 7.47718 9.4823 7.46075C9.51441 7.44432 9.55044 7.4371 9.5864 7.43989C9.62236 7.44268 9.65685 7.45537 9.68604 7.47656L15.0181 11.3535C15.0433 11.3713 15.0638 11.3949 15.078 11.4223C15.0922 11.4497 15.0996 11.4801 15.0996 11.511C15.0996 11.5418 15.0922 11.5722 15.078 11.5996C15.0638 11.627 15.0433 11.6506 15.0181 11.6685Z" fill="#E5E5E5" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestVideo
