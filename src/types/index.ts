export interface BlogsType {
  title: string;
  description: string;
  imageURL?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DTOBlogs {
  _id: string;
  title: string;
  description: string;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
}
