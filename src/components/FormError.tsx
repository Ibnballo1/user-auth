export default function FormError({ message }: { message: string }) {
  return (
    <div className="mb-4 rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="ml-3">
          <p className="text-sm font-medium text-red-800">{message}</p>
        </div>
      </div>
    </div>
  );
}
