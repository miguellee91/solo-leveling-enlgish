
import Link from 'next/link';
import { BookOpen, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full py-12 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <BookOpen className="h-6 w-6 text-accent" />
                            <span className="text-xl font-bold tracking-tight">
                                Solo Leveling <span className="text-accent">English</span>
                            </span>
                        </Link>
                        <p className="text-primary-foreground/80 text-sm">
                            최고 수준의 영어 교육을 통해 학생들의 글로벌 성공을 지원합니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">문의하기</h4>
                        <div className="space-y-2 text-sm text-primary-foreground/80">
                            <p>부산광역시 사하구 낙동대로535번길 42, 1층</p>
                            <p>070-8228-6849</p>
                            <p>harumasil@kakao.com</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">바로가기</h4>
                        <nav className="flex flex-col gap-2 text-sm text-primary-foreground/80">
                            <Link href="#" className="hover:text-accent transition-colors">학원 소개</Link>
                            <Link href="#" className="hover:text-accent transition-colors">커리큘럼</Link>
                            <Link href="#" className="hover:text-accent transition-colors">개인정보처리방침</Link>
                            <Link href="#" className="hover:text-accent transition-colors">이용약관</Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">SNS</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="hover:text-accent transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
                    <p>© {new Date().getFullYear()} Solo Leveling English. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
