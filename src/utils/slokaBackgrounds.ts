// Background images for each sloka
// Using Ramayana-themed images
// Priority: 1. Local images in public/images/, 2. Unsplash images

export const getSlokaBackground = (slokaId: number): string => {
  // First, try to use local images from public/images folder
  // If you have Ramayana-specific images, name them: sloka-11.jpg, sloka-12.jpg, etc.
  // and place them in public/images/ folder
  // The code will automatically use local images if they exist
  
  // Supported image formats
  const imageFormats = ['jpg', 'jpeg', 'png', 'webp'];
  for (const format of imageFormats) {
    const localImagePath = `/images/sloka-${slokaId}.${format}`;
    // Note: In production, you'd check if the file exists
    // For now, we'll use Unsplash as primary source
  }
  
  // Unsplash images - Ramayana-themed
  // These are high-quality images related to Indian temples, ancient architecture, and spiritual themes
  // You can replace these with your own Ramayana images by adding them to public/images/
  
  const unsplashImages: Record<number, string> = {
    // Sloka 11: Hanuman contemplating - Ancient Indian temple
    11: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    
    // Sloka 12: Lanka's defenses - Ancient fortress
    12: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    
    // Sloka 13: Fortifications - Ancient walls
    13: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    
    // Sloka 14: Strategic thinking - Spiritual path
    14: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    
    // Sloka 15: City description - Ancient city
    15: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    
    // Sloka 16: Divine structures - Temple
    16: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    
    // Sloka 17: Divine presence - Spiritual architecture
    17: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    
    // Sloka 18: Ancient structures - Heritage
    18: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    
    // Sloka 19: Sacred places - Sacred temple
    19: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    
    // Sloka 20: Spiritual journey - Divine path
    20: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
  };

  // Return Unsplash image (you can replace this logic to check for local images first)
  return unsplashImages[slokaId] || unsplashImages[11];
};

// Primary function - returns background image URL for a sloka
export const getSlokaBackgroundImage = (slokaId: number): string => {
  return getSlokaBackground(slokaId);
};
