import BlogSidebar from '@/components/sections/blogs/blogSidebar'
import InstagramGallery from '@/components/sections/instagramGallery'
import PageHeader from '@/components/sections/pageHeader'

const PrivacyPolicy = () => {
    return (
        <>
            <PageHeader
                className={"sbg-6"}
                currentPage={"Privacy Policy"}
                title={"item Privacy Policy"}
            />
            <div className="cookie-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cookie-content">
                                <div className="pera-list">
                                    <h2>AI Technology & Intellectual Property</h2>
                                    <p>All AI models, algorithms, datasets, and related technologies on this item platform, including but not limited to MCP agents, RAG systems, knowledge bases, and AI applications, are protected by intellectual property laws and proprietary licensing agreements.</p>
                                </div>
                                <div className="notice">
                                    <div className="row align-items-center">
                                        <div className="col-lg-2">
                                            <div className="icon">
                                                <i className="bx bx-error-circle" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10">
                                            <p>This privacy policy governs the item platform, covering data handling for AI agents, machine learning models, API integrations, and user interactions within our comprehensive AI ecosystem.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pera-list">
                                    <h2>AI API Hub & Data Processing</h2>
                                    <ul>
                                        <li><b>MCP Agent Data:</b> Multi-Modal Cognitive Processing agents collect and process user inputs to provide intelligent responses and task automation.</li>
                                        <li><b>Model Training Data:</b> Large language model fine-tuning services may utilize user-provided datasets for custom model development.</li>
                                        <li><b>RAG System Data:</b> Retrieval-Augmented Generation systems process documents and knowledge bases to enhance AI responses with contextual information.</li>
                                        <li><b>API Usage Data:</b> All API calls, model interactions, and system performance metrics are logged for service optimization and billing purposes.</li>
                                    </ul>
                                </div>
                                <div className="pera-list">
                                    <h2>Third-Party AI Integrations</h2>
                                    <p>Our item integrates with various third-party AI services, model providers, and data sources. These integrations may involve data sharing with external AI platforms, cloud computing services, and specialized AI tool providers. We maintain strict data governance protocols for all third-party AI collaborations.</p>
                                </div>
                                <div className="pera-list">
                                    <h2>AI Model Privacy & Security</h2>
                                    <p>We implement advanced encryption, secure model serving, and privacy-preserving machine learning techniques to protect user data and AI model integrity. Regular security audits ensure compliance with AI ethics standards and data protection regulations.</p>
                                </div>
                                <div className="pera-list">
                                    <h2>AI Data Usage & Processing</h2>
                                    <p>item uses collected data for various AI-powered purposes:</p>
                                    <ul className="style-1">
                                        <li>To train and improve AI models and algorithms</li>
                                        <li>To provide personalized AI agent recommendations</li>
                                        <li>To optimize RAG system performance and knowledge retrieval</li>
                                        <li>To enhance MCP agent cognitive capabilities</li>
                                        <li>To monitor AI system performance and detect anomalies</li>
                                        <li>To facilitate AI model marketplace transactions</li>
                                        <li>To enable collaborative AI development and research</li>
                                        <li>To provide AI analytics and insights to platform users</li>
                                    </ul>
                                </div>
                                <div className="pera-list">
                                    <h2>AI Ethics & Data Rights (GDPR Compliance)</h2>
                                    <p>As an AI-focused platform, we adhere to strict AI ethics guidelines and data protection standards. Users have the right to understand how their data is used in AI training, request AI model explanations, and control their data&apos;s involvement in machine learning processes.</p>
                                    <p>For AI-specific data requests, model transparency inquiries, or to exercise your rights regarding AI data processing, please contact our AI Ethics team.</p>
                                </div>
                                <div className="pera-list">
                                    <h2>External AI API Hub & Integrations</h2>
                                    <p>Our item may connect to external AI services, model repositories, and research platforms. When accessing third-party AI tools or services, you will be subject to their respective privacy policies and AI usage terms.</p>
                                    <p>We carefully vet all AI service providers but cannot control their data practices. We recommend reviewing the privacy policies of any external AI services you choose to use through our platform.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
            <InstagramGallery />
        </>
    )
}

export default PrivacyPolicy