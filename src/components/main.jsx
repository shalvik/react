import Count from './count';
import Greeting from './greeting';
import Story from './story';

const Main = () => {
    return (
        <div>
            <Greeting greetingText="Hello from ReactJs!" description="This is a second homework" />
            <Count />
            <Story />
        </div>
    )
}

export default Main;