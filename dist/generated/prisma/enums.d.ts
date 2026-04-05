export declare const TaskStatus: {
    readonly inbox: "inbox";
    readonly next_action: "next_action";
    readonly completed: "completed";
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export declare const Priority: {
    readonly low: "low";
    readonly medium: "medium";
    readonly high: "high";
};
export type Priority = (typeof Priority)[keyof typeof Priority];
export declare const HabitFrequency: {
    readonly daily: "daily";
    readonly weekly: "weekly";
};
export type HabitFrequency = (typeof HabitFrequency)[keyof typeof HabitFrequency];
export declare const GoalType: {
    readonly task: "task";
    readonly habit: "habit";
    readonly reading: "reading";
};
export type GoalType = (typeof GoalType)[keyof typeof GoalType];
export declare const Context: {
    readonly work: "work";
    readonly personal: "personal";
    readonly learning: "learning";
    readonly fitness: "fitness";
    readonly other: "other";
};
export type Context = (typeof Context)[keyof typeof Context];
//# sourceMappingURL=enums.d.ts.map