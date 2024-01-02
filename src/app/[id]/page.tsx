export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <span>{params.id}</span>
    </>
  );
}
