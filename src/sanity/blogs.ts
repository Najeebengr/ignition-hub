export default {
    name: 'blogs',
    type: 'document',
    title: 'Blogs',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'publishDate',
            type: 'date',
            title: 'Publish Date'
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author'
        },
        {
            name: 'blogImage',
            type: 'image',
            title: 'Blog Image'
        },
        {
            name: 'category',
            type: 'string', 
            title: 'Category'
        }
    ]
}