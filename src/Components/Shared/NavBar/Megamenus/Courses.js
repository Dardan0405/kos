import React from "react";
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './Megamenus.scss'
import { PopularCourse,Categories } from "../data";
import{Cat} from "./data1"


 

const Course = () =>{
return(
    <div className="nav-megamenu course-megamenu" >
        <div className="menu-links">
            <h5><FormattedMessage id = 'Cat' defaultMessage = 'Categories' /></h5>
            <div className="inner-links">
                {Cat.map((props) => {
                    return(
                        <ul>
                            {props.items.map((l)=>{
                                return(
                                    <div className="dev">
                                        <div className="Text">
                                            <div className="title">
                                                <p>{l.title}</p>
                                                <div className="icon">
                                                    {l.icon}
                                                </div>
                                                </div>
                                            
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </ul>
                    )
                }
                )}
            </div>

            
            <div className="menu-links">
                <div className="inner-links">
                    {Cat.map((props) =>{
                    return(
                        <ul>
                            {props.item.map((l)=> {
                                return(
                                    <div className="dev">
                                        <div className="Description">
                                            <div className="title">
                                               <p> {l.title}</p>
                                               <div className="icon">
                                                {l.icon}
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } 
                            )}
                       
                       
                       </ul>
                    
                            )
                    }
                    )}
                </div>
            </div>
           
            
                            
                        
                       

           {/* {<div className="inner-links">
                {Categories.map((props) => {
                    return(
                        <ul>
                        {props.items.map((l) =>{
                            return(
                                <div className={`row${l.row}`}>
                                    {l.rowItems.map((i)  =>{
                                        return(
                                            <div className="items" >
                                                <div className="text-container">
                                                    
                                                    <div className="title"><p>{i.title}</p></div>
                                                    
                                                    
                                                </div>
                                                <div className="bottom"></div>
                                                <div className="icon">{i.icon}</div>
                                                

                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            )
                        }
                        )}
                     </ul>
                    )
                })}
               </div>
              
                  
                
     

       
       
     

            }*/}


</div>
    </div>

)
}

export default Course