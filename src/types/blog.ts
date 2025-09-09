export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  status: 'draft' | 'published' | 'scheduled';
  category_id?: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  
  // Relations
  category?: Category;
  author?: {
    id: string;
    name: string;
  };
  tags?: Tag[];
}

export interface Comment {
  id: string;
  post_id: string;
  user_name: string;
  user_email: string;
  content: string;
  status: 'approved' | 'pending' | 'spam';
  created_at: string;
}

export interface SEO {
  id: string;
  post_id: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  slug_override?: string;
}

export interface Media {
  id: string;
  file_url: string;
  file_name: string;
  file_type?: string;
  file_size?: number;
  uploaded_by: string;
  uploaded_at: string;
}