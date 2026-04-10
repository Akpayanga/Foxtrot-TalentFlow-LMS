export const coursesData = {
  'ux-research': {
    id: 'ux-research',
    title: 'UX Research Fundamentals',
    description: 'Learn the fundamentals of user experience research',
    instructor: 'Sarah Chen',
    modules: [
      {
        id: 'm1',
        title: 'Introduction to UX Research',
        duration: '45 min',
        description: 'Overview of UX research methodologies and why they matter',
        videoUrl: 'https://example.com/video1.mp4',
        resources: [
          { name: 'Research Guide PDF', url: '#', icon: 'FileText' },
          { name: 'Templates', url: '#', icon: 'Download' }
        ],
        completed: true
      },
      {
        id: 'm2',
        title: 'User Interviews & Surveys',
        duration: '60 min',
        description: 'How to conduct effective user interviews and create surveys',
        videoUrl: 'https://example.com/video2.mp4',
        resources: [
          { name: 'Interview Guide', url: '#', icon: 'FileText' },
          { name: 'Survey Template', url: '#', icon: 'Download' }
        ],
        completed: false
      },
      {
        id: 'm3',
        title: 'User Testing & Analysis',
        duration: '50 min',
        description: 'Running user tests and analyzing results',
        videoUrl: 'https://example.com/video3.mp4',
        resources: [
          { name: 'Analysis Framework', url: '#', icon: 'FileText' }
        ],
        completed: false
      },
      {
        id: 'm4',
        title: 'Data Visualization & Reporting',
        duration: '40 min',
        description: 'Presenting findings through effective visualizations',
        videoUrl: 'https://example.com/video4.mp4',
        resources: [
          { name: 'Report Template', url: '#', icon: 'FileText' }
        ],
        completed: false
      }
    ],
    progress: 25
  },
  'web-design': {
    id: 'web-design',
    title: 'Web Design Principles',
    description: 'Master modern web design principles and best practices',
    instructor: 'Michael Torres',
    modules: [
      {
        id: 'm1',
        title: 'Design Fundamentals',
        duration: '55 min',
        description: 'Core principles of design',
        videoUrl: 'https://example.com/video1.mp4',
        resources: [],
        completed: true
      },
      {
        id: 'm2',
        title: 'Color & Typography',
        duration: '48 min',
        description: 'Choosing colors and fonts effectively',
        videoUrl: 'https://example.com/video2.mp4',
        resources: [],
        completed: false
      }
    ],
    progress: 50
  }
};

export const userProgress = {
  'ux-research': {
    enrolled: true,
    completedModules: ['m1'],
    currentModule: 'm2',
    progress: 25,
    certificateEarned: false
  },
  'web-design': {
    enrolled: true,
    completedModules: ['m1'],
    currentModule: 'm2',
    progress: 50,
    certificateEarned: false
  }
};
