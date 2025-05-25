import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'
import PortfolioArticle from '@/components/sections/portfolioArticle'

const AppStoreDetails = () => {
    return (
        <>
            <PageHeader
                className={"sbg-2"}
                currentPage={"App Store Details"}
                title={"App Store Details"}
            />
            <PortfolioArticle/>
            <InstagramGallery />
        </>
    )
}

export default AppStoreDetails