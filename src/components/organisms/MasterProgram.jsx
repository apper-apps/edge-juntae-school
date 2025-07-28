import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const MasterProgram = () => {
  const benefits = [
    {
      icon: "Trophy",
      title: "1:1 멘토링",
      description: "준태스쿨 창립자와의 개인 멘토링 세션"
    },
    {
      icon: "Zap",
      title: "독점 전략",
      description: "공개되지 않은 고급 수익 창출 전략"
    },
    {
      icon: "Network",
      title: "VIP 네트워크",
      description: "성공한 작가들과의 직접적인 네트워킹 기회"
    },
    {
      icon: "Target",
      title: "맞춤형 코칭",
      description: "개인 목표에 맞춘 전문적인 코칭 프로그램"
    }
  ];

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full mb-6">
          <ApperIcon name="Crown" size={32} className="text-amber-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 korean-text mb-4">
          마스터 프로그램
        </h2>
        <p className="text-lg text-gray-600 korean-text max-w-2xl mx-auto leading-relaxed">
          글쓰기 분야의 최고 전문가가 되기 위한 프리미엄 프로그램입니다. 
          개인 맞춤형 지도와 독점적인 기회들을 제공합니다.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-amber-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg flex items-center justify-center">
                <ApperIcon name={benefit.icon} size={24} className="text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 korean-text mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 korean-text leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-gradient-to-r from-yellow-50 to-amber-50 border-amber-200">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-amber-800 korean-text mb-4">
            특별한 기회를 준비 중입니다
          </h3>
          <p className="text-gray-700 korean-text mb-6 max-w-lg mx-auto">
            마스터 프로그램은 한정된 인원만을 대상으로 하는 프리미엄 과정입니다. 
            곧 공개될 예정이니 조금만 기다려주세요.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-amber-100 rounded-lg text-amber-700 korean-text">
            <ApperIcon name="Star" size={20} className="mr-2" />
            우선 예약 신청 (준비 중)
          </div>
        </div>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 korean-text">
          * 마스터 프로그램은 멤버십 허브 수료 후 신청 가능합니다
        </p>
      </div>
    </div>
  );
};

export default MasterProgram;