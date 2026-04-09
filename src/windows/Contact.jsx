import { WindowControl } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControl target='contact' />
                <h2>Contact Me</h2>
            </div>

            <div className='p-5 space-y-5'>
                <img
                    src='images/oscar.png'
                    alt='Oscar'
                    className='w-20 rounded-full'
                />

                <h3>Let's connect</h3>
                <p>I'm always open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, feel free to reach out!</p>
                <p>lindooscar635@gmail.com</p>

                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li
                            key={id}
                            style={{ backgroundColor: bg }}
                        >
                            <a
                                href={link}
                                target='_blank'
                                rel='noopener noreferrer'
                                title={text}
                            >
                                <img
                                    src={icon}
                                    alt={text}
                                    className='size-5'
                                />

                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow