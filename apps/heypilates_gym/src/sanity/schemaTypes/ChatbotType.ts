// sanity/schema/chatbot.ts
export default {
  name: 'chatbot',
  title: 'Chatbot Configuration',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Chatbot Name',
      type: 'string',
      initialValue: 'Klaudia'
    },
    {
      name: 'title',
      title: 'Chatbot Title',
      type: 'string',
      initialValue: 'Founder of Hey Pilates'
    },
    {
      name: 'avatar',
      title: 'Chatbot Avatar',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'welcomeMessage',
      title: 'Welcome Message',
      type: 'text',
      initialValue: 'Hey 👋 I\'m Klaudia, founder of Hey Pilates. Ask me anything about our classes, pricing, or private training!'
    },
    {
      name: 'fallbackMessage',
      title: 'Fallback Message',
      type: 'text',
      initialValue: 'That\'s a great question! I might need to explain it in person — feel free to contact us or ask another question 😊'
    },
    {
      name: 'faqs',
      title: 'FAQ Database',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'question',
            title: 'Question/Keyword',
            type: 'string'
          },
          {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Words or phrases that trigger this answer'
          },
          {
            name: 'answer',
            title: 'Answer',
            type: 'text'
          },
          {
            name: 'links',
            title: 'Related Links',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'text', type: 'string' },
                { name: 'url', type: 'string' }
              ]
            }]
          },
          {
            name: 'priority',
            title: 'Priority',
            type: 'number',
            initialValue: 1
          }
        ]
      }]
    },
    {
      name: 'suggestedQuestions',
      title: 'Suggested Questions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Questions to show as quick replies'
    },
    {
      name: 'hours',
      title: 'Operating Hours',
      type: 'text',
      initialValue: 'We\'re available Monday to Friday: 6 AM - 8 PM, Saturday: 8 AM - 6 PM, Sunday: 9 AM - 4 PM'
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'whatsapp', type: 'string' }
      ]
    },
    {
      name: 'isActive',
      title: 'Chatbot Active',
      type: 'boolean',
      initialValue: true
    }
  ]
}