import { FormattedMessage } from 'react-intl'
import icon1 from '../../../assets/Home/Categories/icon1.svg'
import icon2 from '../../../assets/Home/Categories/icon2.svg'
import icon3 from '../../../assets/Home/Categories/icon3.svg'
import icon4 from '../../../assets/Home/Categories/icon4.svg'
import icon5 from '../../../assets/Home/Categories/icon5.svg'
import icon6 from '../../../assets/Home/Categories/icon6.svg'
import icon7 from '../../../assets/Home/Categories/icon7.svg'
import icon8 from '../../../assets/Home/Categories/icon8.svg'
import icon9 from '../../../assets/Home/Categories/icon9.svg'
import  Design from '../../../assets/Home/Categories/Design.png'
import Game from '../../../assets/Home/Categories/Game.png'
import {FiVideo} from 'react-icons/fi'
import {BiSupport} from 'react-icons/bi'
import{GrDocument} from 'react-icons/gr'
import {IoHelpCircleSharp} from 'react-icons/io5'
import{IoIosArrowForward} from 'react-icons/io'



export const Categories = [
    {
    cls:'Devs',
    items:[
        {
            row:'row1',
            rowItems:[
                {
                    to :'/',
                    title:<FormattedMessage id='Dev' defaultMessage='Development'/>,
                    icon:<IoIosArrowForward/>,
                },
            
                 
                    { 
                    to :'/',
                    title:<FormattedMessage id='Web' defaultMessage='Web Development'/>,
                    icon: <IoIosArrowForward/>
                }
            ]
        
        },
        {
            row:'row2',
            rowItems:[
                {
                    to :'/',
                    title:<FormattedMessage id='Busines' defaultMessage='Bussines'/>,
                    icon: <IoIosArrowForward/>
                },
                {
                    to :'/',
                    title:<FormattedMessage id='Data' defaultMessage='Data Science'/>,
                    icon: <IoIosArrowForward/>
                }
            ]
        },
        {
            row:'row3',
            rowItems:[
                {
                    to :'/',
                    title:<FormattedMessage id='Finance' defaultMessage='Finance & Accounting'/>,
                    icon:<IoIosArrowForward/>
                },
                {
                    to :'/',
                    title:<FormattedMessage id='Mobile' defaultMessage='Mobile Development'/>,
                    icon: <IoIosArrowForward/>
                }
            ]
        },
        {
            row:'row4',
            rowItems:[

                {
                    to :'/',
                    title:<FormattedMessage id='IT' defaultMessage='IT & Software'/>,
                    icon:<IoIosArrowForward/>
                },
                {
                    to :'/',
                    title:<FormattedMessage id='Programing' defaultMessage='Programing Languages'/>,
                    icon: <IoIosArrowForward/>
                }
            ]
        },
        {
            row:'row5',
            rowItems:[
                {
                    to :'/',
                    title:<FormattedMessage id='Office' defaultMessage='Office Prductivity'/>,
                    icon:<IoIosArrowForward/>
                },
                {
                    to :'/',
                    title:<FormattedMessage id='Game' defaultMessage='Game Devlopment'/>,
                    icon: <IoIosArrowForward/>
                }
            ]
        },
        {
        row:'row6',
            rowItems:[
                {
                    to :'/',
                    title:<FormattedMessage id='Prsonal' defaultMessage='Personal Development'/>,
                    icon:<IoIosArrowForward/>
                },
                {
                    to :'/',
                    title:<FormattedMessage id='DB' defaultMessage='Database Design'/>,
                    icon: <IoIosArrowForward/>
                }
            ]
        },

        {
            row:'row7',
                rowItems:[
                    {
                        to :'/',
                        title:<FormattedMessage id='Des' defaultMessage='Design'/>,
                        icon:<IoIosArrowForward/>
                    },
                    {
                        to :'/',
                        title:<FormattedMessage id='Software' defaultMessage='Software Testing'/>,
                        icon: <IoIosArrowForward/>
                    }
                ]
            },
            {
                row:'row8',
                    rowItems:[
                        {
                            to :'/',
                            title:<FormattedMessage id='Market' defaultMessage='Marketing'/>,
                            icon:<IoIosArrowForward/>
                        },
                        {
                            to :'/',
                            title:<FormattedMessage id='Soft' defaultMessage='Software Engineering'/>,
                            icon: <IoIosArrowForward/>
                        }
                    ]
                },
                {
                    row:'row9',
                        rowItems:[
                            {
                                to :'/',
                                title:<FormattedMessage id='Life' defaultMessage='Lifestyle'/>,
                                icon:<IoIosArrowForward/>
                            },
                            {
                                to :'/',
                                title:<FormattedMessage id='Tools' defaultMessage='Software Development Tools'/>,
                                icon: <IoIosArrowForward/>
                            }
                        ]
                    },
                    {
                        row:'row10',
                            rowItems:[
                                {
                                    to :'/',
                                    title:<FormattedMessage id='Dev' defaultMessage='Development'/>,
                                    icon:<IoIosArrowForward/>
                                },
                                {
                                    title:<FormattedMessage id='Web' defaultMessage='Web Development'/>,
                                    icon: <IoIosArrowForward/>
                                }
                            ]
                        },
                        {
                            row:'row10',
                                rowItems:[
                                    {
                                        to :'/',
                                        title:<FormattedMessage id='Photo' defaultMessage='Photography & Video'/>,
                                        icon:<IoIosArrowForward/>
                                    },
                                    {
                                        to :'/',
                                        title:<FormattedMessage id='No' defaultMessage='No-code Development'/>,
                                        icon: <IoIosArrowForward/>

                                    },

                                ]
                                },
                                {
                                    row:'row11',
                                    rowItems:[
                                        {
                                         to :'/',
                                         title:<FormattedMessage id='Health' defaultMessage='Health & Fitess'/>,
                                         icon: <IoIosArrowForward/>
                                        }
                                    ]
                                },
                                {
                                    row:'row12',
                                    rowItems:[
                                        {
                                         to :'/',
                                         title:<FormattedMessage id='Music' defaultMessage='Music'/>,
                                         icon: <IoIosArrowForward/>
                                        }
                                    ]
                                },
                                {
                                    row:'row13',
                                    rowItems:[
                                        {
                                        to :'/',
                                         title:<FormattedMessage id='Teaching' defaultMessage='Teaching  & Academics'/>,
                                         icon: <IoIosArrowForward/>
                                        }
                                    ]
                                              }
                                            ],
                                        

}
 
]





/*export const Courses=  [
    {
        to: '/',
        icon: icon1,
        title: <FormattedMessage  id = 'Bussines' defaultMessage = 'Bussiness'/>,
        text:  <FormattedMessage id = 'Course'  defaultMessage = '383 Courses'/>,
        bg: '#6C5CE7'
        
},
{
    to: '/',
    icon: icon2,
    title: <FormattedMessage  id = 'Photo' defaultMessage = 'Photograpy'/>,
    text:  <FormattedMessage id = 'Course1'  defaultMessage = '203 Courses'/>,
    bg: '#34B4B3',
    color: '#34B4B3'
},
{
    to: '/',
    icon: icon3,
    title: <FormattedMessage  id = 'It ' defaultMessage = 'It & Sofware'/>,
    text:  <FormattedMessage id = 'Course2'  defaultMessage = '152 Courses'/>,
    bg: '#B43AD8',
    color: '#B43AD8'
},
{
    
        to: '/',
        icon:icon4,
        title: <FormattedMessage  id = 'Art'  defaultMessage = 'Design' />,
        text:  <FormattedMessage id = 'Course3'  defaultMessage = '537 Courses'/>,
        bg: '#E0474E',
        color: '#E0474E'
    
},
{
        to: '/',
        icon:icon5,
        title: <FormattedMessage  id = 'Gamge' defaultMessage = 'Gaming'/>,
        text:  <FormattedMessage id = 'Course4'  defaultMessage = '173 Courses'/>,
        bg: '#E0474E' ,
        color: '#E0474E' 
},
{
        to: '/',
        icon:icon6,
        title: <FormattedMessage  id = 'Market' defaultMessage = 'Marketing'/>,
        text:  <FormattedMessage id = 'Course5'  defaultMessage = '145 Courses'/>,
        bg: '#DC451E' ,
        color: '#DC451E' 
},
{
    to: '/',
    icon:icon7,
    title: <FormattedMessage  id = 'Dev' defaultMessage = 'Develpoment'/>,
    text:  <FormattedMessage id = 'Course6'  defaultMessage = '506 Courses'/>,
    bg: '#EE9812' ,
    color: '#EE9812'
},
{
    to: '/',
    icon:icon8,
    title: <FormattedMessage  id = 'Finance' defaultMessage = 'Finance & Accounting'/>,
    text:  <FormattedMessage id = 'Course7'  defaultMessage = '168 Courses'/>,
    bg: '#4BBF4F' ,
    color: '#4BBF4F'
},
{
    to: '/',
    icon:icon9,
    title: <FormattedMessage  id = 'Office' defaultMessage = 'Office Productivity'/>,
    text:  <FormattedMessage id = 'Course8'  defaultMessage = '87 Courses'/>,
    bg: '#3597C2' ,
    color: '#3597C2' 
},

]
export  const PopularCourse = [{
    to: '/',
    icon:Design,
    title: <FormattedMessage id= 'Desing' defaultMessage = 'Graphic Desing'/>,
    text: <FormattedMessage id='Content' defaultMessage = 'Desng & make Infographic'/>
},
{
    to: '/',
    icon: Game,
    title: <FormattedMessage id = 'Game' defaultMessage = 'Game Desing'/>,
    text: <FormattedMessage id = 'content1' defaultMessage = 'Game Desing: Art and Concept'/>
}
]
export const Resource = [{
    to: '/',
    icon: <FiVideo/>,
    title: <FormattedMessage id ='Video' defaultMessage = 'GuideVideo'/>,
    bg:'#C1BBBB',
    border: '6E53FF'
},
{
    to: '/',
    icon: <BiSupport/>,
    title: <FormattedMessage id ='sup' defaultMessage = 'Support'/>,
    bg:'#C1BBBB',
    border:'6E53FF'
},
{
    to: '/',
    icon: <GrDocument/>,
    title: <FormattedMessage id ='Doc' defaultMessage = 'Blog'/>,
    bg:'#C1BBBB',
    border:'6E53FF'
},
{
    to: '/',
    icon: <IoHelpCircleSharp/>,
    title: <FormattedMessage id ='Help' defaultMessage = 'Help Center'/>,
    bg:'#C1BBBB',
    border:'6E53FF'
},
]*/
