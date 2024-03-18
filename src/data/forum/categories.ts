type Category = {
    key: string
    name: string
    group: string
}

const categories: Category[] = [
    { key: 'fractures', name: 'Fractures', group: 'injuryTypes' },
    { key: 'spinals', name: 'Spinal Cord Injuries', group: 'injuryTypes' },
    { key: 'brain', name: 'Traumatic Brain Injuries', group: 'injuryTypes' },
    { key: 'musculoskeletal', name: 'Musculoskeletal Injuries', group: 'injuryTypes' },
    { key: 'internal', name: 'Internal Injuries', group: 'injuryTypes' },
    { key: 'burn', name: 'Burn Injuries', group: 'injuryTypes' },
    { key: 'other-injuries', name: 'Other Specific Injuries', group: 'injuryTypes' },
    { key: 'physical', name: 'Physical Therapy', group: 'rehabilitation' },
    { key: 'occupational', name: 'Occupational Therapy', group: 'rehabilitation' },
    { key: 'speech', name: 'Speech Therapy', group: 'rehabilitation' },
    { key: 'mobility', name: 'Mobility Aids and Devices', group: 'rehabilitation' },
    { key: 'assistive', name: 'Assistive Technologies', group: 'rehabilitation' },
    { key: 'exercises', name: 'Rehabilitation Exercises', group: 'rehabilitation' },
    { key: 'milestones', name: 'Recovery Milestones', group: 'rehabilitation' },
    { key: 'coping', name: 'Coping Strategies', group: 'mentalHealth' },
    { key: 'emotional', name: 'Emotional Support', group: 'mentalHealth' },
    { key: 'stress', name: 'Stress Management', group: 'mentalHealth' },
    { key: 'anxiety', name: 'Anxiety and Depression', group: 'mentalHealth' },
    { key: 'mindfulness', name: 'Mindfulness and Meditation', group: 'mentalHealth' },
    { key: 'therapeutic', name: 'Therapeutic Techniques', group: 'mentalHealth' },
    { key: 'self-care', name: 'Self-Care Practices', group: 'mentalHealth' },
    { key: 'introduction', name: 'Introduction and Community Guidelines', group: 'peerSupport' },
    { key: 'success', name: 'Success Stories', group: 'peerSupport' },
    { key: 'personal', name: 'Personal Experiences', group: 'peerSupport' },
    { key: 'q&a', name: 'Q&A and Advice', group: 'peerSupport' },
    { key: 'support', name: 'Support Groups', group: 'peerSupport' },
    { key: 'motivational', name: 'Motivational Posts', group: 'peerSupport' },
    { key: 'discussion', name: 'General Discussion', group: 'peerSupport' }
]

const toGrouped = (categories: Category[]) => Object.groupBy(categories, ({group}) => group)

export const groupedCategories = toGrouped(categories)
export default categories

// he: [
//     { name: 'שברים', group: 'סוגי פגיעה' },
//     { name: 'פגיעות בחוט השדרה', group: 'סוגי פגיעה' },
//     { name: 'פגיעות במוח טראומטיות', group: 'סוגי פגיעה' },
//     { name: 'פגיעות במערכת השיירה והשלד', group: 'סוגי פגיעה' },
//     { name: 'פגיעות פנימיות', group: 'סוגי פגיעה' },
//     { name: 'פציעות כיבים', group: 'סוגי פגיעה' },
//     { name: 'פציעות ספציפיות נוספות', group: 'סוגי פגיעה' },
//     { name: 'פיזיותרפיה', group: 'התאוששות' },
//     { name: 'טיפול בעיסוק', group: 'התאוששות' },
//     { name: 'טיפול בדיבור', group: 'התאוששות' },
//     { name: 'ציוד נייד ומכשירים', group: 'התאוששות' },
//     { name: 'טכנולוגיות סיוע', group: 'התאוששות' },
//     { name: 'תרגילי התאוששות', group: 'התאוששות' },
//     { name: 'שלבי התאוששות', group: 'התאוששות' },
//     { name: 'אסטרטגיות ניהול מצב רוח', group: 'בריאות נפשית' },
//     { name: 'תמיכה רגשית', group: 'בריאות נפשית' },
//     { name: 'ניהול מתח', group: 'בריאות נפשית' },
//     { name: 'חרדה ודיכאון', group: 'בריאות נפשית' },
//     { name: 'מיינדפולנס ומדיטציה', group: 'בריאות נפשית' },
//     { name: 'טכניקות טיפוליות', group: 'בריאות נפשית' },
//     { name: 'פרקטיקות פיזור רוח', group: 'בריאות נפשית' },
//     { name: 'הקדמה והנחיות קהילתיות', group: 'תמיכה מעמדית' },
//     { name: 'סיפורי הצלחה', group: 'תמיכה מעמדית' },
//     { name: 'חוויות אישיות', group: 'תמיכה מעמדית' },
//     { name: 'שאלות ותשובות וייעוץ', group: 'תמיכה מעמדית' },
//     { name: 'קבוצות תמיכה', group: 'תמיכה מעמדית' },
//     { name: 'פוסטים מחזקים', group: 'תמיכה מעמדית' },
//     { name: 'דיון כללי', group: 'תמיכה מעמדית' }
// ]


