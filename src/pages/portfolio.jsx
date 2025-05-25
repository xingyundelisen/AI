import Brand from '@/components/sections/brands/brand'
import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import ProjectGrid from '@/components/sections/projects/projectGrid'

const AppStore = () => {
    return (
        <>
            <PageHeader
                className={"sbg-7"}
                currentPage={"App Store"}
                title={"App Store"}
            />
            <ProjectGrid/>
            <Brand/>
            <InstagramGallery className={"pt-100"}/>
        </>
    )
}

export default AppStore