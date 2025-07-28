import lessonData from "@/services/mockData/lessons.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getFreeLibraryLessons = async () => {
  await delay(300);
  return lessonData.filter(lesson => lesson.section === "free-library");
};

export const getAllLessons = async () => {
  await delay(300);
  return [...lessonData];
};

export const getLessonById = async (id) => {
  await delay(200);
  const lesson = lessonData.find(lesson => lesson.Id === parseInt(id));
  if (!lesson) {
    throw new Error("Lesson not found");
  }
  return { ...lesson };
};

export const createLesson = async (lessonData) => {
  await delay(400);
  const maxId = Math.max(...lessonData.map(lesson => lesson.Id));
  const newLesson = {
    ...lessonData,
    Id: maxId + 1
  };
  lessonData.push(newLesson);
  return { ...newLesson };
};

export const updateLesson = async (id, updateData) => {
  await delay(350);
  const index = lessonData.findIndex(lesson => lesson.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Lesson not found");
  }
  lessonData[index] = { ...lessonData[index], ...updateData };
  return { ...lessonData[index] };
};

export const deleteLesson = async (id) => {
  await delay(300);
  const index = lessonData.findIndex(lesson => lesson.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Lesson not found");
  }
  const deletedLesson = { ...lessonData[index] };
  lessonData.splice(index, 1);
  return deletedLesson;
};