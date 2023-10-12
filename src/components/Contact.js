import React from 'react';
import { motion } from "framer-motion";
import {
    Ripple,
    initTE,
} from "tw-elements";
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

initTE({ Ripple });

const Contact = () => {

    const socials = [
        {
            "links": <BsInstagram />,
            "bgcolor1": "#f09433",
            "bgcolor2": "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            "color": "white",
            "link": "https://www.instagram.com/naman_bansal_02/"
        },
        {
            "links": <BsLinkedin />,
            "bgcolor1": "#0A66C2",
            "bgcolor2": "#0077B5",
            "color": "white",
            "link": "www.linkedin.com/in/naman-bansal-9585nb"
        },
        {
            "links": <BsGithub />,
            "bgcolor1": "#2b3137",
            "bgcolor2": "#373535",
            "color": "white",
            "link": "https://github.com/Namanb454"
        },
        {
            "links": <SiLeetcode />,
            "bgcolor1": "#000000",
            "bgcolor2": "#000000",
            "color": "white",
            "link": "https://leetcode.com/Naman_Bansal454/"
        },
    ]

    return (
        <div>
            {socials.map(data => {
                return (


                    <motion.a
                        href={data.link}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                        }}
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        class="mb-2 inline-block rounded-full p-3 mx-1 text-lg font-medium uppercase leading-normal shadow-md ease-in-out duration-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        style={{
                            background: data.bgcolor1,
                            background: data.bgcolor2,

                        }}>
                        {data.links}
                    </motion.a>
                )
            })}
        </div>
    );
};

export default Contact;