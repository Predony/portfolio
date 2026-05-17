export interface ProjectChallenge {
    problem: string;
    solution: string;
}

export interface Project {
    id: string;
    title: string;
    role: string;
    period: string;
    company: string;
    description: string;
    techStack: string[];
    challenge: ProjectChallenge;
    highlights: string[];
}