import React from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * SEO Component for dynamic meta tags management
 * Provides comprehensive SEO meta tags for different pages
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

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Pristine Global" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Schema Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
