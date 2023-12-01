import Course from "./Course";

export default function ListCourses({ courses }: { courses: any }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {courses.map((c: any, i: number) => (
        <Course item={c} key={i}/>
      ))}
    </div>
  );
}
