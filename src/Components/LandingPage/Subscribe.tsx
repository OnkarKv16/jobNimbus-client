import { Button, TextInput } from "@mantine/core";
import { MantineProvider } from '@mantine/core';

const Subscribe =()=>{
    return(
        <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
            <div className="text-5xl w-2/5 text-center font-semibold text-mine-shaft-100">
                   Never Wants to Miss <span className="text-bright-sun-400">Job News?</span>
            </div>
            <div className="flex gap-4 bg-mine-shaft-700 px-3 py-2 items-center rounded-md">
                <TextInput className="[&_input]:text-mine-shaft-100 items-center font-semibold"
                    variant="unstyled"
                    placeholder="your@email.com"
                    size="xl"
                />
                <Button className="rounded-lg" size="lg" color="bright-sun.4" variant="filled">Subscribe</Button>
            
            </div>
        </div>
    )
}
export default Subscribe;