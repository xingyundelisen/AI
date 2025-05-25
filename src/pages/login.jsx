import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [activeTab, setActiveTab] = useState('login')
    const [selectedModule, setSelectedModule] = useState('mcp-agent')

    const aiModules = [
        {
            id: 'mcp-agent',
            name: 'MCP Agent',
            icon: '🤖',
            description: 'Multi-Modal Cognitive Processing Agent',
            features: ['Multi-Modal Cognitive Processing', 'RAG System Integration', 'Decision Making', 'Task Automation']
        },
        {
            id: 'model-tuning',
            name: '大模型微调',
            icon: '⚙️',
            description: 'Large Language Model Fine-tuning Platform',
            features: ['Custom Training', 'Parameter Optimization', 'Performance Monitoring', 'Model Deployment']
        },
        {
            id: 'datasets',
            name: '大模型数据集',
            icon: '📊',
            description: 'Comprehensive AI Training Datasets',
            features: ['Multi-Modal Data', 'Quality Annotation', 'Data Preprocessing', 'Version Control']
        },
        {
            id: 'rag',
            name: 'RAG System',
            icon: '🔍',
            description: 'Retrieval-Augmented Generation',
            features: ['Document Retrieval', 'Context Enhancement', 'Knowledge Integration', 'Real-time Updates']
        },
        {
            id: 'rag-low',
            name: 'RAG LOW',
            icon: '⚡',
            description: 'Low-latency RAG Implementation',
            features: ['Fast Retrieval', 'Edge Computing', 'Optimized Inference', 'Resource Efficient']
        },
        {
            id: 'knowledge-base',
            name: '知识库',
            icon: '📚',
            description: 'Intelligent Knowledge Management',
            features: ['Semantic Search', 'Auto Categorization', 'Knowledge Graph', 'Multi-source Integration']
        },
        {
            id: 'ai-manus',
            name: 'AI Manus',
            icon: '🎨',
            description: 'AI-Powered Creative Suite',
            features: ['Content Generation', 'Design Automation', 'Creative Workflows', 'Multi-format Output']
        }
    ]

    return (
        <div className="login-section">
            <div className="container-fluid">
                <div className="row g-0">
                    {/* Left Side - AI Modules Showcase */}
                    <div className="col-lg-8">
                        <div className="ai-modules-showcase">
                            <div className="modules-header">
                                <h2>item - 功能模块展示</h2>
                                <p>探索我们开发的前沿AI技术模块</p>
                            </div>
                            
                            <div className="modules-grid">
                                {aiModules.map((module) => (
                                    <div 
                                        key={module.id}
                                        className={`module-card ${selectedModule === module.id ? 'active' : ''}`}
                                        onClick={() => setSelectedModule(module.id)}
                                    >
                                        <div className="module-icon">{module.icon}</div>
                                        <h3>{module.name}</h3>
                                        <p>{module.description}</p>
                                        <div className="module-features">
                                            {module.features.map((feature, index) => (
                                                <span key={index} className="feature-tag">{feature}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Selected Module Details */}
                            <div className="module-details">
                                {aiModules.find(m => m.id === selectedModule) && (
                                    <div className="detail-panel">
                                        <div className="detail-header">
                                            <span className="detail-icon">
                                                {aiModules.find(m => m.id === selectedModule).icon}
                                            </span>
                                            <h3>{aiModules.find(m => m.id === selectedModule).name}</h3>
                                        </div>
                                        <p>{aiModules.find(m => m.id === selectedModule).description}</p>
                                        <div className="detail-stats">
                                            <div className="stat">
                                                <span className="stat-number">99.9%</span>
                                                <span className="stat-label">Uptime</span>
                                            </div>
                                            <div className="stat">
                                                <span className="stat-number">8.2K</span>
                                                <span className="stat-label">Active Users</span>
                                            </div>
                                            <div className="stat">
                                                <span className="stat-number">50ms</span>
                                                <span className="stat-label">Response Time</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Login/Register Form */}
                    <div className="col-lg-4">
                        <div className="login-form-container">
                            <div className="form-header">
                                <Link to="/" className="logo">
                                    <span className="logo-icon">🚀</span>
                                    item
                                </Link>
                                <h2>欢迎来到AI生态系统</h2>
                                <p>访问全球领先的AI技术平台</p>
                            </div>

                            <div className="form-tabs">
                                <button 
                                    className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('login')}
                                >
                                    登录
                                </button>
                                <button 
                                    className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('register')}
                                >
                                    注册
                                </button>
                            </div>

                            {activeTab === 'login' ? (
                                <form className="auth-form">
                                    <div className="form-group">
                                        <label>邮箱地址</label>
                                        <input type="email" className="form-control" placeholder="your@email.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>密码</label>
                                        <input type="password" className="form-control" placeholder="••••••••" />
                                    </div>
                                    <div className="form-options">
                                        <label className="checkbox-label">
                                            <input type="checkbox" />
                                            <span>记住我</span>
                                        </label>
                                        <Link to="#" className="forgot-link">忘记密码？</Link>
                                    </div>
                                    <button type="submit" className="auth-btn">
                                        登录到AI平台
                                    </button>
                                </form>
                            ) : (
                                <form className="auth-form">
                                    <div className="form-group">
                                        <label>用户名</label>
                                        <input type="text" className="form-control" placeholder="选择用户名" />
                                    </div>
                                    <div className="form-group">
                                        <label>邮箱地址</label>
                                        <input type="email" className="form-control" placeholder="your@email.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>密码</label>
                                        <input type="password" className="form-control" placeholder="创建安全密码" />
                                    </div>
                                    <div className="form-group">
                                        <label>确认密码</label>
                                        <input type="password" className="form-control" placeholder="再次输入密码" />
                                    </div>
                                    <div className="form-options">
                                        <label className="checkbox-label">
                                            <input type="checkbox" />
                                            <span>我同意 <Link to="/terms">服务条款</Link> 和 <Link to="/privacy">隐私政策</Link></span>
                                        </label>
                                    </div>
                                    <button type="submit" className="auth-btn">
                                        创建AI账户
                                    </button>
                                </form>
                            )}

                            <div className="social-auth">
                                <div className="divider">
                                    <span>或者使用</span>
                                </div>
                                <div className="social-buttons">
                                    <button className="social-btn google">
                                        <i className="bx bxl-google"></i>
                                        Google
                                    </button>
                                    <button className="social-btn github">
                                        <i className="bx bxl-github"></i>
                                        GitHub
                                    </button>
                                </div>
                            </div>

                            <div className="platform-stats">
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <span className="stat-number">50K+</span>
                                        <span className="stat-label">开发者</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">1M+</span>
                                        <span className="stat-label">API调用</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">99.9%</span>
                                        <span className="stat-label">可用性</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login