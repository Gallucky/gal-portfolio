import type { MarkupProject } from "../markupProjects";

const websiteBuilder: MarkupProject = {
    slug: "website-builder",
    featured: false,
    stack: ["HTML", "CSS", "JavaScript"],
    content: {
        en: {
            title: "Website Builder",
            shortDescription:
                "A drag-and-drop style tool for creating and styling web elements and diagrams.",
            overview:
                "Built a browser-based website builder where users can create HTML elements of their choice, position them on a canvas, and style them. Functions as both a simple page builder and a diagramming tool.",
            architecture:
                "Static HTML/CSS/JS. Each created element is a DOM node appended dynamically. Element properties (size, color, position) are controlled via UI controls that update inline styles directly.",
            challenges: [
                "Managing the state of multiple independently styled elements on the canvas simultaneously.",
                "Implementing drag and reposition behavior using mouse events without a library.",
            ],
            lessons: [
                "Deep understanding of DOM manipulation — creating, styling, and removing elements programmatically.",
                "Mouse event handling (mousedown, mousemove, mouseup) for drag interactions is more nuanced than it first appears.",
            ],
        },
        he: {
            title: "בונה אתרים",
            shortDescription: "כלי ליצירה ועיצוב אלמנטים ודיאגרמות בדפדפן.",
            overview:
                "בניתי כלי מבוסס דפדפן שבו משתמשים יכולים ליצור אלמנטי HTML לבחירתם, למקמם על קנבס ולעצב אותם. משמש גם כבונה דפים פשוט וגם ככלי לדיאגרמות.",
            architecture:
                "HTML/CSS/JS סטטי. כל אלמנט שנוצר הוא node DOM שמתווסף דינמית. מאפייני האלמנט נשלטים דרך פקדי UI המעדכנים סגנונות inline ישירות.",
            challenges: [
                "ניהול מצב של מספר אלמנטים מעוצבים עצמאית על הקנבס בו זמנית.",
                "מימוש התנהגות גרירה ומיקום מחדש באמצעות אירועי עכבר ללא ספרייה.",
            ],
            lessons: [
                "הבנה עמוקה של מניפולציית DOM — יצירה, עיצוב והסרת אלמנטים באופן תכנותי.",
                "טיפול באירועי עכבר לאינטראקציות גרירה מורכב יותר ממה שנראה בהתחלה.",
            ],
        },
    },
};

export default websiteBuilder;
