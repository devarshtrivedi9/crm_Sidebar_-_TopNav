import Sidebar from '../components/Layout/Sidebar'
import TopNav from '../components/Layout/TopNav'

const TestPages = () => {
    return(
        <div className="flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
            <TopNav/>
            </div>
        </div>
    )
}

export default TestPages