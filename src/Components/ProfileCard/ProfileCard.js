import React from "react"
import { Github, LinkedIn, Twitter } from "../Icons"
import Tag from "../Tag"
import "./ProfileCard.scss"

export default ({src, username, userphoto, title, description, organisationLogo, organisationName, tags }) => {
    return (
        <div className="profile">
        <div className="pos">
        <div className="image-container">
        <img src={userphoto} alt={username} className="image" />
        </div>
        {/* <h3 className="username">{username}</h3> */}
        </div>

        <div className="profile-content">
        <h2 className="profile-title">{username}</h2>
        <p className="profile-text">{description}</p>
        <div className="tag-container">{tags.map((tag,index) => (
            <Tag key={index} text={tag} />
        ))}</div>
        <div className="profile-social-links">
        <a href="www.linkedin.in"><LinkedIn fill={"#0E76A8"} /></a>
        <a href="www.github.in"><Github fill={"#211F1F"} /></a>
        <a href="www.twitter.in"><Twitter fill={"#1DA1F2"} /></a>
        </div>
        <div className="profile-organisation">
        <div className="profile-organisation-img-container">
        <img src={organisationLogo} className="image" alt="organisation-name" />
        </div>
        <p className="profile-organisation-name">{organisationName}</p>
        </div>
        </div>
        </div>
    )
}