import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookCheck, MonitorPlay, Sparkles } from "lucide-react";

const features = [
    {
        title: "검증된 커리큘럼",
        description: "초등 기초부터 고등 내신 및 수능 1등급까지, 다년간의 데이터를 바탕으로 설계된 체계적인 로드맵을 제공합니다.",
        icon: BookCheck,
    },
    {
        title: "영어 독서 자기주도 학습",
        description: "엄선된 영어 원서를 읽으며 문해력을 키우고, 스스로 학습하는 습관을 형성하여 장기적인 학습 역량을 강화합니다.",
        icon: Users, // Using Users icon temporarily, or keep consistent
    },
    {
        title: "듣기 & 말하기 통합 학습",
        description: "단순 문법 암기가 아닌, 실제 듣기와 말하기 훈련을 병행하여 입시 듣기 평가와 실용 영어를 완벽하게 대비합니다.",
        icon: MonitorPlay,
    },
    {
        title: "1:1 밀착 관리 시스템",
        description: "담임 선생님의 세심한 코칭과 피드백으로 취약 유형을 완벽하게 보완하고 성적 향상을 이끌어냅니다.",
        icon: Sparkles,
    },
];

export default function Services() {
    return (
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                            성적 상승의 핵심, <span className="text-primary">Solo Leveling English</span>
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            변화하는 입시 트렌드에 맞춘 최적의 교육 시스템. 학생의 현재를 분석하고 미래를 설계합니다.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-card border-border shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="p-3 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
