import { Avatar, Button, Divider, Text } from "@mantine/core";
import { IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { talents, profile } from "../Data/TalentData";

const TalentCard =(props:any)=>{
    return (
        <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] transition duration-300 ease-in-out !shadow-bright-sun-400">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center justify-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar  size="lg" src={`/${props.image}.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold text-lg">{props.name}</div>
                        <div className="text-sm text-mine-shaft-300 ">{props.role} &#x2022; {props.comapany}</div>
                    </div>
                </div>
                <IconHeart className="text-mine-shaft-300 cursor-pointer " stroke={1.5}/>
            </div>
            <div className="flex gap-2 ">
                {
                    props.topSkills?.map((skill:any , index:any) =><div key={index} className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">
                    {skill}</div>)
                }
                
            </div>
            
                <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                    {props.about}
                </Text>
                <Divider size="sm"color="mine-shaft.7" />
            <div className="flex justify-between"> 
                <div className="font-semibold text-mine-shaft-200">
                    {props.expectedCtc}
                </div>
                <div className="flex gap-1 text-xs items-center text-mine-shaft-400">
                    <IconMapPin className="h-5 w-5" stroke={1.5}/> {props.location}
                </div>
            </div>
            <Divider size="sm"color="mine-shaft.7" />
            <div className="flex [&>*]:w-1/2 [&>*]:p-1"  >
                <Link to="/talent-profile">
                    <Button color="bright-sun.4" variant="outline" fullWidth>Profile</Button>
                </Link>
                <div>
                    <Button color="bright-sun.4" variant="light" fullWidth>Massage</Button>
                </div>
            </div>
        </div>
    )
}
export default TalentCard;