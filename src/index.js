import './editor.scss';
import './faq-section';
import './ticker-section';
import './team-section';
import './about-section';
import './timeline-section';
import './testimonial-section';
import './feature-section';
import './call-to-actions-section';
import './hero-section';

wp.domReady(() => {
    const categories = wp.blocks.getCategories().map((category) => {
      if (category.slug === 'section_collection') {
        return {
          ...category,
          icon: (
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="0.75em" width="0.75em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" stroke="#000" strokeWidth="2" d="M5,18 L8,18 L8,6 L5,6 L5,18 Z M12,2 L12,22 L12,2 Z M1,22 L23,22 L23,2 L1,2 L1,22 Z"></path>
            </svg>
          ),
        };
      }
      return category;
    });
    wp.blocks.setCategories(categories);
  });

