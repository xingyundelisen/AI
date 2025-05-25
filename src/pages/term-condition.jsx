import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'

const TermCondition = () => {
    return (
        <>
            <PageHeader
                className={"sbg-6"}
                currentPage={"Terms & Conditions"}
                title={"item Terms & Conditions"}
            />
            <div className="cookie-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cookie-content">
                                <div className="pera-list">
                                    <h2>AI Technology & Intellectual Property Rights</h2>
                                    <p>All AI models, algorithms, datasets, MCP agents, RAG systems, knowledge bases, and proprietary AI technologies on this item platform are protected by intellectual property laws, patent rights, and licensing agreements. Users must respect all AI model copyrights and usage restrictions.</p>
                                </div>
                                <div className="notice">
                                    <div className="row align-items-center">
                                        <div className="col-lg-2">
                                            <div className="icon">
                                                <i className="bx bx-error-circle" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10">
                                            <p>These terms and conditions govern your use of the item platform, including access to AI agents, machine learning models, API services, and all related AI technologies and services provided through our comprehensive ecosystem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pera-list">
                                    <h2>AI API Hub Usage & Licensing</h2>
                                    <ul>
                                        <li><b>MCP Agent License:</b> Users are granted a limited, non-exclusive license to use Multi-Modal Cognitive Processing agents for authorized business and research purposes.</li>
                                        <li><b>Model Fine-tuning Rights:</b> Custom model training services are subject to data ownership agreements and model usage restrictions.</li>
                                        <li><b>RAG System Usage:</b> Retrieval-Augmented Generation systems must be used in compliance with knowledge base licensing and data source agreements.</li>
                                        <li><b>API Access Terms:</b> All API integrations are subject to rate limits, usage quotas, and commercial licensing terms.</li>
                                    </ul>
                                </div>
                                <div className="pera-list">
                                    <h2>Third-Party AI Integrations & Partnerships</h2>
                                    <p>Our item integrates with various third-party AI service providers, model repositories, and research institutions. Users accessing third-party AI services through our platform are subject to additional terms and conditions from those providers. We maintain partnerships with leading AI companies to ensure service quality and compliance.</p>
                                </div>
                                <div className="pera-list">
                                    <h2>AI Ethics & Responsible Use</h2>
                                    <p>Users must adhere to AI ethics guidelines, responsible AI principles, and applicable regulations when using our AI services. Prohibited uses include generating harmful content, violating privacy rights, or using AI systems for illegal activities. We reserve the right to suspend access for violations of AI ethics standards.</p>
                                </div>
                                <div className="pera-list">
                                    <h2>Service Updates & AI Model Evolution</h2>
                                    <p>We continuously update our AI models, algorithms, and services to improve performance and capabilities. These terms may be updated to reflect new AI technologies, regulatory requirements, or service enhancements. Users will be notified of significant changes to AI service terms.</p>
                                </div>
                                <div className="pera-list">
                                    <h2>Data Ownership & AI Training Rights</h2>
                                    <p>Users retain ownership of their input data while granting us necessary rights to process data through AI systems. We may use aggregated, anonymized data to improve AI models and services. Specific data usage rights vary by service type and are detailed in individual AI service agreements.</p>
                                </div>
                                <div className="pera-list">
                                    <h2>Limitation of Liability for AI API Hub</h2>
                                    <p>While we strive for high-quality AI services, machine learning systems may produce unexpected results. Users acknowledge the inherent limitations of AI technology and agree that we are not liable for AI-generated content, model predictions, or automated decisions made using our services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InstagramGallery />
        </>
    )
}

export default TermCondition