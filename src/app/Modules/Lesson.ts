export class Lesson {
    public lessonId: string;
    public title: string;
    public content: string;
    public courseId: string;

    constructor(title: string, content: string, courseId: string,lessonId: string) {
        this.lessonId = lessonId;
        this.title = title;
        this.content = content;
        this.courseId = courseId;

    }
}

