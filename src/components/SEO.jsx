import { useEffect } from 'react'

/**
 * SEO Component for dynamic meta tags management
 * Uses React's built-in document manipulation for SEO optimization
 */
const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  schemaData = null 
}) => {
  const defaultTitle = "Pristine Global - Healthcare, Technology & Trading Solutions | UK, Qatar, India"
  const defaultDescription = "Pristine Global provides excellence in healthcare, retail technology, and trading solutions across UK, Qatar, and India. Expert care homes, child care, and innovative business services."
  const defaultKeywords = "healthcare services, care homes UK, child care, technology solutions, trading services, Qatar healthcare, India distribution, medical services, retail technology, global healthcare"
  const defaultImage = "/logo.png"
  const siteUrl = "https://pristineglobal.netlify.app"
  
  const seoTitle = title || defaultTitle
  const seoDescription = description || defaultDescription
  const seoKeywords = keywords || defaultKeywords
  const seoImage = image || defaultImage
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImageUrl = seoImage.startsWith('http') ? seoImage : `${siteUrl}${seoImage}`

  useEffect(() => {
    // Update document title
    document.title = seoTitle

    // Helper function to update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`
      let metaTag = document.querySelector(selector)
      
      if (metaTag) {
        metaTag.setAttribute('content', content)
      } else {
        metaTag = document.createElement('meta')
        if (isProperty) {
          metaTag.setAttribute('property', property)
        } else {
          metaTag.setAttribute('name', property)
        }
        metaTag.setAttribute('content', content)
        document.head.appendChild(metaTag)
      }
    }

    // Helper function to update or create link tags
    const updateLinkTag = (rel, href) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`)
      
      if (linkTag) {
        linkTag.setAttribute('href', href)
      } else {
        linkTag = document.createElement('link')
        linkTag.setAttribute('rel', rel)
        linkTag.setAttribute('href', href)
        document.head.appendChild(linkTag)
      }
    }

    // Update basic meta tags
    updateMetaTag('description', seoDescription)
    updateMetaTag('keywords', seoKeywords)
    
    // Update canonical URL
    updateLinkTag('canonical', seoUrl)
    
    // Update Open Graph tags
    updateMetaTag('og:title', seoTitle, true)
    updateMetaTag('og:description', seoDescription, true)
    updateMetaTag('og:image', fullImageUrl, true)
    updateMetaTag('og:url', seoUrl, true)
    updateMetaTag('og:type', type, true)
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', seoTitle)
    updateMetaTag('twitter:description', seoDescription)
    updateMetaTag('twitter:image', fullImageUrl)

    // Add structured data if provided
    if (schemaData) {
      // Remove existing schema data
      const existingSchema = document.querySelector('script[type="application/ld+json"]#page-schema')
      if (existingSchema) {
        existingSchema.remove()
      }

      // Add new schema data
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'page-schema'
      script.textContent = JSON.stringify(schemaData)
      document.head.appendChild(script)
    }

  }, [seoTitle, seoDescription, seoKeywords, fullImageUrl, seoUrl, type, schemaData])

  // This component doesn't render anything visible
  return null
}

export default SEO
