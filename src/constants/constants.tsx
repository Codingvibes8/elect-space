


import {BoltIcon, BoltSlashIcon, UserPlusIcon} from "@heroicons/react/24/solid";
import {HomeIcon} from "@heroicons/react/24/outline";

export const NavItems = [
    {
        label: "Home",
        link: "/",
        icon: HomeIcon,
    },
    {
        label: "About",
        link: "/about",
        icon: UserPlusIcon,
    },
    {
        label: "Services",
        link: "/services",
        children: [
            {
                label: "Residential Electrical Repairs",
                link: "/services/patTest",
                icon: BoltSlashIcon,
            },
            {
                label: "Commercial  Electrical Repairs",
                link: "/services/ElectricalSafetyCertificates",
                icon: BoltIcon,

            },

            {
                label: "Outdoor Lighting and Heating",
                link: "/services/OutdoorLightingAndHeating",
                icon: BoltIcon,
            },

            {
                label: "Electric Vehicle Charging Installation",
                link: "/services/ElectricVehicleChargingInstallation",
                icon: BoltIcon,

            },
            {
                label: "Air Conditioning Installation & Services",
                link: "/services/AirConServices",
                BoltIcon,
            },
            {
                label: "Flood damage",
                link: "/services//FloodDamage",
                BoltIcon,
            },

        ]
    },
    {
        label: "Contact us",
        icon: HomeIcon,
        link: "/contact",
    }


];


export const servicePageItems = [

    {
        id: 1,
        title: 'Electrical Safety Certificates',
        url: '/services/ElectricalSafetyCertificates',
        image: '/elec-safety.jpg'
    },
    {
        id: 2,
        title: 'Outdoor Lighting and Heating',
        url: '/services/OutdoorLightingAndHeating',
        image: '/outdoor-light.jpg'
    },
    {
        id: 3,
        title: 'PAT Testing',
        url: '/services/patTest',
        image: '/pat-test.jpg'
    },
    {
        id: 4,
        title: 'Electric Vehicle Charging Installation',
        url: '/services/ElectricVehicleChargingInstallation',
        image: '/fuse-box1.jpg'
    },
    {
        id: 5,
        title: 'AirConServices',
        url: '/services/AirConServices',
        image: '/fuse-box1.jpg'
    },
    {
        id: 6,
        title: 'Flood Damage',
        url: '/services/FloodDamage', image: '/hero-electric.jpg'
    }
]




