import AIAPIHubShowcase from '@/components/sections/aIServicesShowcase'
import ContinuousLearning from '@/components/sections/continuousLearning'
import Features from '@/components/sections/features/features'
import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import WorkProcess from '@/components/sections/workProcess'

const APIHub = () => {
    return (
        <>
            <PageHeader
                className={"sbg-2"}
                currentPage={"AI API Hub"}
                title={"item API Hub"}
            />
            <Features/>
            <ContinuousLearning/>
            <AIAPIHubShowcase/>
            <WorkProcess order={"order-1"} isLampImgTop={false}/>
            <InstagramGallery/>
        </>
    )
}

export default APIHub