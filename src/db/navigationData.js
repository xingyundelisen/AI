export const navigationData = [
    {
        label: "AI Agents",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "Marketing Analyzer Pro", href: "/",},
            { label: "Smart CRM Assistant", href: "/home-two" },
            { label: "AI Content Creator", href: "/home-three" },
            { label: "Data Analytics Agent", href: "/home-four" },
        ],
        isActive: true,
    },
    {
        label: "MCP",
        href: "/about",
        hasDropdown: true,
        dropdownItems: [
            { label: "MCP-3000X", href: "/about" },
            { label: "NLP Processor v4.2", href: "/services" },
            { label: "Featured Models", href: "/portfolio" },
        ],
    },
    {
        label: "App Store",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "Top AI Applications", href: "/portfolio" },
            { label: "Smart CRM Assistant", href: "/portfolio-details" },
            { label: "Image Recognition API", href: "/gallery" },
        ],
    },
    {
        label: "API Hub",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "Featured APIs", href: "/services" },
            { label: "Image Recognition API", href: "/services-details" },
            { label: "Natural Language Processing", href: "/pricing" },
        ],
    },
    {
        label: "Forum",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "Hot Forum Topics", href: "/team" },
            { label: "Optimizing AI Training Pipelines", href: "/faq" },
            {
                label: "Marketplace",
                href: "#",
                hasDropdown: true,
                nestedDropdown: [
                    { label: "Products List", href: "/products-list" },
                    { label: "Product Details", href: "/single-products" },
                    { label: "Cart", href: "/cart" },
                    { label: "Checkout", href: "/checkout" },
                ],
            },
            { label: "Community Gallery", href: "/gallery" },
            { label: "Trusted Partners", href: "/pricing" },
            {
                label: "Resources",
                href: "#",
                hasDropdown: true,
                nestedDropdown: [
                    { label: "404 Error Page", href: "/not-found" },
                    { label: "Terms & Conditions", href: "/term-condition" },
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Cookie Policy", href: "/cookie-policy" },
                ],
            },
        ],
    },
    {
        label: "Contact",
        href: "/contact",
        hasDropdown: false,
    },
];
