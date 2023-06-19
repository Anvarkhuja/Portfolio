import React, {useState} from 'react';
import {works} from "../../constants/data";
import "./Work.css";
import {BsGithub} from "react-icons/bs";
import {FaExternalLinkAlt} from "react-icons/fa";
import {BsDot} from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";


const Work = () => {
    const [imageModal, setImageModal] = useState(false);
    const [imageSource] = useState("");



  return (
    <div className='work section-p bg-grey' id = "work">
        <div className={imageModal ? "image-box show-image-box" : "image-box"}>
            <div className='image-box-content'>
                <img src = {imageSource} alt = "" />
                <span className='image-box-close-btn' onClick={() => setImageModal(false)}>
                    <ImCancelCircle size = {30} />
                </span>
            </div>
        </div>

        <div className='container'>
            <div className='work-content'>
                <div className='section-title'>
                    <h3 className='text-brown'>Mening<span className='text-dark'> loyihalarim</span></h3>
                    <p className='text'>My full stack projects</p>
                </div>

                <div className='work-list grid'>
                    {
                        works.map((work, index) => {
                            return (
                                <div className='work-item text-center'>
                                    <img src = {work.image} alt = "" />
                                    <span className='work-item-icon'>
                                        <a href='https://github.com/Anvarkhuja' target='_blank' rel="noreferrer">
                                        <BsGithub size = {38} className = "text-blue" /></a> 
                                        <BsDot size = {28} className = "text-white" /> 
                                        <a href={work.link} target='_blank'  rel="noreferrer">
                                        <FaExternalLinkAlt size = {38} className = "text-blue" /></a>
                                    </span>
                                    <h>{work.desc}</h>
                                  
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work