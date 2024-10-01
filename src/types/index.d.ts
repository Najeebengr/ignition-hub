export type navItem={
    name:string,
    link:string
}[]

export type buttonType={
    variant: "primary" | "secondary"
    text: string
    icon ?: React.ReactNode
}

export type testimonialsType={
    id?: number
    text: string
    author: string
    authorLocation: string
    authorAvatar: string
}

export type heroSectionContentType = {
    id: string
    title: string
    text: string
} 
export type BlogType = {
    _id: string;
    title: string;
    description: string;
    publishDate: string;
    author: string;
    category: string;
    _createdAt: string;
    _updatedAt?: string;
    blogImage: {
      asset: {
        _id: string;
        url: string;
      };
    };
  };
  