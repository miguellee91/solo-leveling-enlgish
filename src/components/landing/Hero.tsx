import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background overflow-hidden">
            {/* Background Graphic Element */}
            <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-secondary/30 skew-x-12 translate-x-20" />

            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                                <span className="text-primary">초등</span>부터 <span className="text-primary">대입</span>까지,<br />
                                내신과 수능의<br />
                                확실한 해답
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Solo Leveling English만의 검증된 커리큘럼으로 흔들리지 않는 영어 실력을 완성하세요.
                                영어 원서 읽기와 통합 학습으로 언어 역량과 입시 성과를 동시에 잡습니다.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                                무료 레벨 테스트 <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Link href="https://open.kakao.com/o/g2X1Y08h" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="text-foreground border-input hover:bg-accent hover:text-accent-foreground">
                                    상담 예약하기
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>내신 완벽 대비</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>수능 1등급 완성</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span>자기주도 학습</span>
                            </div>
                        </div>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border mt-8">
                            <div>
                                <h4 className="text-2xl font-bold text-primary">1등급 목표</h4>
                                <p className="text-xs text-muted-foreground">영어성적 등급 상승</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-primary">SKY</h4>
                                <p className="text-xs text-muted-foreground">합격생 배출</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-primary">100%</h4>
                                <p className="text-xs text-muted-foreground">성적 향상</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-center relative">
                        <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                            {/* Decorative elements behind the image */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-primary/5 to-accent/10 rounded-full blur-3xl -z-10" />

                            <Image
                                src="/hero-illustration.png"
                                alt="Solo Leveling English Education Concept"
                                width={600}
                                height={600}
                                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
