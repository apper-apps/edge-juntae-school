import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const MembershipHub = () => {
  const features = [
    {
      icon: "FileText",
      title: "전문 글쓰기 가이드",
      description: "수익형 콘텐츠 작성법과 독자 참여도 높이는 전략"
    },
    {
      icon: "TrendingUp",
      title: "수익 분석 도구",
      description: "글쓰기를 통한 수익 추적 및 분석 시스템"
    },
    {
      icon: "Users",
      title: "멤버 커뮤니티",
      description: "동료 작가들과의 네트워킹 및 피드백 교환"
    },
    {
      icon: "BookOpen",
      title: "심화 학습 자료",
      description: "업계 전문가들의 실전 노하우와 케이스 스터디"
    }
  ];

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6">
          <ApperIcon name="Users" size={32} className="text-primary" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 korean-text mb-4">
          멤버십 허브
        </h2>
        <p className="text-lg text-gray-600 korean-text max-w-2xl mx-auto leading-relaxed">
          글쓰기 전문가로 성장하기 위한 체계적인 학습 환경과 
          실전 도구들을 제공하는 멤버십 프로그램입니다.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                <ApperIcon name={feature.icon} size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 korean-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 korean-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary korean-text mb-4">
            곧 출시 예정
          </h3>
          <p className="text-gray-700 korean-text mb-6 max-w-lg mx-auto">
            멤버십 허브는 현재 개발 중입니다. 
            출시 소식을 가장 먼저 받아보시려면 알림을 신청해주세요.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-lg text-gray-600 korean-text">
            <ApperIcon name="Bell" size={20} className="mr-2" />
            출시 알림 신청 (준비 중)
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MembershipHub;