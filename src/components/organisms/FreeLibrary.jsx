import React, { useState, useEffect } from "react";
import AccordionItem from "@/components/molecules/AccordionItem";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { getFreeLibraryLessons } from "@/services/api/lessonService";

const FreeLibrary = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedLesson, setExpandedLesson] = useState(null);

  const loadLessons = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getFreeLibraryLessons();
      setLessons(data);
    } catch (err) {
      setError("무료 라이브러리를 불러오는 중 오류가 발생했습니다.");
      console.error("Error loading free library:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLessons();
  }, []);

  const handleToggleLesson = (lessonId) => {
    setExpandedLesson(expandedLesson === lessonId ? null : lessonId);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadLessons} />;
  if (lessons.length === 0) return <Empty />;

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 korean-text mb-4">
          무료 라이브러리
        </h2>
        <p className="text-lg text-gray-600 korean-text leading-relaxed">
          글쓰기로 수익을 창출하는 기초적인 방법들을 무료로 제공합니다. 
          각 레슨을 클릭하여 상세 내용을 확인해보세요.
        </p>
      </div>

      <div className="space-y-4">
{lessons.map((lesson) => (
          <AccordionItem
            key={lesson.Id}
            lesson={lesson}
            isExpanded={Boolean(expandedLesson === lesson.Id)}
            onToggle={() => handleToggleLesson(lesson.Id)}
          />
        ))}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
        <h3 className="text-xl font-semibold text-primary korean-text mb-3">
          더 많은 콘텐츠가 필요하신가요?
        </h3>
        <p className="text-gray-700 korean-text mb-4">
          멤버십 허브와 마스터 프로그램에서 더욱 전문적인 글쓰기 기법과 
          수익 창출 전략을 배워보세요.
        </p>
        <div className="flex space-x-3">
          <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600 korean-text text-sm">
            멤버십 허브 (준비 중)
          </div>
          <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600 korean-text text-sm">
            마스터 프로그램 (준비 중)
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeLibrary;