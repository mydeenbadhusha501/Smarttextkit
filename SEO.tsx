import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
}

export function SEO({ title, description, keywords = [] }: SEOProps) {
  useEffect(() => {
    // Update title
    if (title.includes('SmartTextKit')) {
      document.title = title;
    } else {
      document.title = `${title} - SmartTextKit`;
    }

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    if (keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Cleanup function to reset title/meta when component unmounts (optional, but good practice for SPAs)
    return () => {
      // We might want to reset to default, but usually the next page will overwrite it.
    };
  }, [title, description, keywords]);

  return null;
}
