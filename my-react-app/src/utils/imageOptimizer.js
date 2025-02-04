export const getOptimizedImageUrl = (imageUrl, width = 800) => {
    // If you're using a CDN or image optimization service, 
    // you can modify this function to generate optimized URLs
    return imageUrl;
  };
  
  export const generateSrcSet = (imageUrl) => {
    const sizes = [320, 480, 800, 1200];
    return sizes
      .map(size => `${getOptimizedImageUrl(imageUrl, size)} ${size}w`)
      .join(', ');
  };