import React from 'react';
import NewPostToggle from './newPostToggle';
import NewPostModal from './newPostModal';
import styles from '../../public/Styles/styles.scss';


const HomeNavBar = props => {

  return (
    <div id="homeNavBar">
      {/* Nav BAR LOGO */}
      {/* A cute yeti will be placed in the background of this container */}
      {/* On click should bring you back to home page / refresh home page */}
      
        <img src='../public/yeti_logo.png' alt='Cute Yeti logo' id='homeYetiLogo'></img>
      
      {/* Use newPostToggle to render a button which will open up a post input modal. The input modal will have a 'post' button which will remove the modal */}
      <NewPostToggle 
        toggle={show=><button type="button" id="postButton" onClick={show}>+POST</button>}
        content={hide => <NewPostModal hide={hide} />}
      />
      {/* For now, profile pic will be set as a background image via CSS. Update this eventually to be a picture in a database? */}
      {/* <div id="profilePic">Profile Pic</div> */}

    </div>
  )
}

export default HomeNavBar;