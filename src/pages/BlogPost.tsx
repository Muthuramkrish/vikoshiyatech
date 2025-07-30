import { useParams, Link } from 'react-router-dom'
import Footer from '../components/Footer'

const BlogPost = () => {
  const { id } = useParams()

  // Blog posts data - same as in Blog.tsx
  const blogPosts = [
    {
      id: 1,
      title: "Web Development Innovations: Delivering Excellence",
      excerpt: "Discover how Vikoshiya Technologies leverages the latest web technologies and rigorous quality assurance to deliver secure, scalable, and high-performing solutions for our clients.",
      content: `
        <p>In today's rapidly evolving digital landscape, businesses need web solutions that not only meet current requirements but also scale with future growth. At Vikoshiya Technologies, we understand this challenge and have developed a comprehensive approach to web development that combines cutting-edge technologies with proven methodologies.</p>
        
        <h2>Our Development Philosophy</h2>
        <p>We believe in creating web applications that are not just functional, but exceptional. Our development process begins with a deep understanding of your business needs, followed by careful planning and execution using the latest technologies.</p>
        
        <h2>Technology Stack</h2>
        <p>Our team specializes in modern web technologies including:</p>
        <ul>
          <li>React.js and Next.js for dynamic user interfaces</li>
          <li>Node.js and Express for robust backend services</li>
          <li>MongoDB and PostgreSQL for reliable data management</li>
          <li>AWS and Azure for scalable cloud infrastructure</li>
        </ul>
        
        <h2>Quality Assurance Integration</h2>
        <p>Every web development project includes comprehensive testing and quality assurance. We implement automated testing, performance optimization, and security best practices to ensure your application meets the highest standards.</p>
        
        <h2>Client Success Stories</h2>
        <p>Our track record speaks for itself. We've helped numerous businesses transform their digital presence with custom web solutions that drive results and exceed expectations.</p>
      `,
      date: "January 15, 2024",
      category: "Web Development",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dd1217ef-0fd1-4724-b058-ab7fbd3c7796.png",
      author: "Vikoshiya Team"
    },
    {
      id: 2,
      title: "Company Updates: Our Latest Milestones",
      excerpt: "Discover recent achievements, new partnerships, and exciting projects at Vikoshiya Technologies. See how we're growing and innovating for our clients.",
      content: `
        <p>As we continue to grow and evolve, we're excited to share some of our latest achievements and milestones that demonstrate our commitment to excellence and innovation.</p>
        
        <h2>New Partnerships</h2>
        <p>We're proud to announce several new strategic partnerships that will enhance our service offerings and expand our capabilities. These collaborations enable us to provide even more comprehensive solutions to our clients.</p>
        
        <h2>Team Growth</h2>
        <p>Our team has grown significantly over the past year, welcoming talented professionals who bring fresh perspectives and specialized expertise to our projects. This growth allows us to take on more complex challenges and deliver even better results.</p>
        
        <h2>Technology Investments</h2>
        <p>We've made substantial investments in new technologies and tools that improve our development processes and enable us to deliver higher quality solutions faster and more efficiently.</p>
        
        <h2>Client Success</h2>
        <p>Our clients continue to achieve remarkable results with our solutions. We're proud to have helped numerous businesses transform their digital presence and achieve their goals.</p>
        
        <h2>Looking Forward</h2>
        <p>As we move forward, we remain committed to innovation, quality, and client success. We're excited about the opportunities ahead and look forward to continuing to serve our clients with excellence.</p>
      `,
      date: "January 10, 2024",
      category: "Company News",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/72f906f1-d94a-4ffd-8387-cd1f1f95365c.png",
      author: "Vikoshiya Team"
    },
    {
      id: 3,
      title: "Transforming Businesses with Expert IT Services",
      excerpt: "At Vikoshiya Technologies, we empower organizations with end-to-end IT solutions—custom web development, robust QA, and seamless integrations.",
      content: `
        <p>In the modern business landscape, technology is not just a tool—it's a strategic advantage. At Vikoshiya Technologies, we help organizations leverage technology to transform their operations, improve efficiency, and drive growth.</p>
        
        <h2>Comprehensive IT Solutions</h2>
        <p>Our approach to IT services is holistic and comprehensive. We don't just build applications; we create complete digital ecosystems that support your business objectives and drive measurable results.</p>
        
        <h2>Custom Development</h2>
        <p>Every business is unique, and your technology solutions should reflect that. We specialize in custom development that addresses your specific challenges and opportunities, creating solutions that fit your business perfectly.</p>
        
        <h2>Quality Assurance</h2>
        <p>Quality is not an afterthought—it's built into every step of our process. Our rigorous testing and quality assurance procedures ensure that your solutions are reliable, secure, and performant.</p>
        
        <h2>Integration Expertise</h2>
        <p>Modern businesses rely on multiple systems and platforms. Our integration expertise ensures that all your technology solutions work together seamlessly, providing a unified and efficient experience.</p>
        
        <h2>Ongoing Support</h2>
        <p>Our relationship with clients doesn't end when the project is complete. We provide ongoing support and maintenance to ensure your solutions continue to perform optimally and evolve with your business needs.</p>
      `,
      date: "January 5, 2024",
      category: "IT Services",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d9b2b15d-dbe0-4356-8ff3-ccb6471aae1d.png",
      author: "Vikoshiya Team"
    }
  ]

  // Find the blog post by ID
  const post = blogPosts.find(p => p.id === parseInt(id || '0'))

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-gray-500">
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed"
            />
          </article>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-gray-600">Share this article:</p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                </div>
              </div>
              <Link 
                to="/blog" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Back to Blog
              </Link>
            </div>
          </footer>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default BlogPost 