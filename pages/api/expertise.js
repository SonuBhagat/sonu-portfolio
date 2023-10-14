const expertise = [
    {
        id: 0,
        title: 'Search Engine Optimization (SEO)',
        desc: 'SEO experts are skilled in optimizing websites to improve their visibility in search engine results. This involves on-page and off-page techniques, keyword research, and staying updated with search engine algorithms.',
    },
    {
        id: 1,
        title: 'Pay-Per-Click Advertising (PPC)',
        desc: "PPC specialists manage paid advertising campaigns. They create and optimize ads, select keywords, set budgets, and monitor performance to maximize return on investment.",
    },
    {
        id: 2,
        title: 'Social Media Advertising',
        desc: "Social media managers oversee a brand's presence on social platforms. They create content, engage with followers, and run paid advertising campaigns to increase brand awareness and drive traffic.",
    },
    {
        id: 3,
        title: 'Facebook Ads',
        desc: "Facebook Ads experts focus on creating and optimizing paid advertising campaigns on the Facebook and Instagram platforms. They utilize detailed targeting options, ad formats, and audience insights to reach specific demographics and achieve marketing objectives.        ",
    },
    {
        id: 4,
        title: 'Google Ads',
        desc: "Google Ads specialists are adept at creating and managing paid advertising campaigns on Google's search and display networks. They understand keyword selection, bidding strategies, ad creation, and conversion tracking to maximize visibility and clicks on Google.",
    },
    {
        id: 5,
        title: 'Content Marketing and Blogging',
        desc: "Content marketers focus on creating blog posts, articles, and other content that informs, entertains, and engages audiences, helping build brand authority and trust.",
    },
    {
        id: 6,
        title: 'Data Analytics and Marketing Metrics',
        desc: "Experts in this field analyze data from various marketing efforts to make informed decisions. They use tools like Google Analytics to track key performance indicators and fine-tune strategies.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
