import { IconBrandSafari, IconBell, IconSettings,} from "@tabler/icons-react";
import { Avatar, Divider, Indicator} from '@mantine/core';
import NavLinks from "./NavLinks";

const Header = () => {
    return (
        <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
            <div className="flex gap-1.5 items-center text-bright-sun-400">
                <IconBrandSafari className="h-10 w-10" stroke={1.8} />
                <div className="text-2xl font-semibold">jobNimbus</div>
            </div>
           
            <NavLinks />
            
            <div className="flex items-center gap-2">
            
                <div className="flex items-center gap-2">
                    <div>Morbius</div>
                    <Avatar src="avatar.png" alt="it's me" />
                </div>
                
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <Indicator color="bright-sun.4" size={8} offset={6} processing>
                        <IconBell stroke={1.5}/>
                    </Indicator>
                </div>
                
                <div className="bg-mine-shaft-900 p-1.5 rounded-full"> 
                    <IconSettings stroke={1.5}/>
                </div>
            </div>
            
        </div>
    );
}

export default Header;
