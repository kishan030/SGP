import React from 'react'
import { FaBook } from 'react-icons/fa';
import { FaSearchengin } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'


export const Sidebardata = [
    {
        title: "Shortage Book",
        icon: <FaBook />,
        link: "/shortagebook",
        dropdown: true,
        dropdownmenuproducts: [
            {
                menuitems: 'Ordered Products',
                link: "/orderedproducts"
            },
            {
                menuitems: 'Shortage Products',
                link: "/shortageproducts"
            },
        ]
    },

    {
        title: "Bill Entry Auditing",
        icon: <FaSearchengin />,
        link: "/billentryauditing",
        dropdown: false
    },
    {
        title: "Product Editing",
        icon: <FaEdit />,
        link: "/searchitem",
        dropdown: false
    },
    {
        title: "Product Reminder",
        icon: <FaBell />,
        link: "/productreminder",
        dropdown: false
    },
]





